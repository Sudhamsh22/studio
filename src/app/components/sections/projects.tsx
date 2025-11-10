import { projects } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Section, SectionTitle } from '@/app/components/section';
import { Code, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export function Projects({ id }: { id: string }) {
  return (
    <Section id={id}>
      <SectionTitle>Featured Projects</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col bg-card/50 border-border/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-lg hover:-translate-y-1">
            <CardHeader>
                <div className="flex justify-between items-center">
                    <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                    {project.category && <Badge variant="outline" className="border-accent text-accent">{project.category}</Badge>}
                </div>
              <CardDescription>{project.subtitle}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex w-full justify-end gap-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                    <Code className="mr-2 h-4 w-4" /> Code
                  </Link>
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}
