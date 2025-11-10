import { experience } from '@/lib/data';
import { Section, SectionTitle } from '@/app/components/section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

export function Experience({ id }: { id: string }) {
  return (
    <Section id={id}>
      <SectionTitle>Experience</SectionTitle>
      <div className="relative max-w-3xl mx-auto">
         <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-border" aria-hidden="true"></div>
        {experience.map((job, index) => (
          <div key={index} className="relative mb-12">
            <div className="absolute left-1/2 -translate-x-1/2 top-1.5 mt-1 w-4 h-4 rounded-full bg-primary ring-4 ring-background"></div>
            <Card className="md:w-10/12 ml-auto relative bg-card/50 backdrop-blur-sm">
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <div>
                            <CardTitle className="font-headline text-xl">{job.role}</CardTitle>
                            <CardDescription className="text-base text-foreground/80">{job.company}</CardDescription>
                        </div>
                        <p className="text-sm text-muted-foreground whitespace-nowrap">{job.period}</p>
                    </div>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-3">
                        {job.description.map((point, pointIndex) => (
                            <li key={pointIndex} className="flex items-start gap-3">
                                <CheckCircle2 className="h-4 w-4 mt-1 shrink-0 text-primary" />
                                <span className="text-foreground/80">{point}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
}
