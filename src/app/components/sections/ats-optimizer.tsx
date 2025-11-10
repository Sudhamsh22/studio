'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useState } from 'react';
import { BrainCircuit, Loader2 } from 'lucide-react';
import { atsKeywordOptimization } from '@/ai/flows/ats-keyword-optimization';
import { Section, SectionTitle } from '@/app/components/section';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { fullResumeContent } from '@/lib/data';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const formSchema = z.object({
  content: z.string().min(200, {
    message: 'Please provide at least 200 characters of content to analyze.',
  }),
});

export function AtsOptimizer({ id }: { id: string }) {
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: fullResumeContent,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResult(null);

    try {
      const response = await atsKeywordOptimization({ portfolioContent: values.content });
      setResult(response.suggestions);
    } catch (e) {
      console.error(e);
      toast({
        variant: 'destructive',
        title: 'An Error Occurred',
        description: 'Failed to generate suggestions. Please try again later.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Section id={id}>
      <SectionTitle>ATS Keyword Optimizer</SectionTitle>
      <Card className="max-w-4xl mx-auto bg-card/50 border-border/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-headline text-xl">
            <BrainCircuit className="h-6 w-6 text-primary" />
            <span>AI-Powered Analysis</span>
          </CardTitle>
          <CardDescription>
            Paste your resume or portfolio content below. The AI will analyze it and suggest keyword optimizations to improve its visibility to Applicant Tracking Systems (ATS).
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Resume/Portfolio Content</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Paste your content here..."
                        className="min-h-[250px] bg-background/50"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full sm:w-auto">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  'Generate Suggestions'
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
        {(isLoading || result) && (
          <CardFooter>
            <div className="w-full">
              {isLoading && (
                 <div className="space-y-2">
                    <div className="animate-pulse bg-muted-foreground/20 rounded-md h-8 w-1/3"></div>
                    <div className="space-y-2">
                        <div className="animate-pulse bg-muted-foreground/20 rounded-md h-4 w-full"></div>
                        <div className="animate-pulse bg-muted-foreground/20 rounded-md h-4 w-5/6"></div>
                        <div className="animate-pulse bg-muted-foreground/20 rounded-md h-4 w-full"></div>
                    </div>
                 </div>
              )}
              {result && (
                <Alert>
                  <AlertTitle className="font-headline">Optimization Suggestions</AlertTitle>
                  <AlertDescription>
                    <ul className="list-disc pl-5 space-y-2 mt-2 whitespace-pre-wrap">
                      {result.split('\n').filter(s => s.length > 1).map((suggestion, index) => (
                        <li key={index}>{suggestion.replace(/^- /, '')}</li>
                      ))}
                    </ul>
                  </AlertDescription>
                </Alert>
              )}
            </div>
          </CardFooter>
        )}
      </Card>
    </Section>
  );
}
