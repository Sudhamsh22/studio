import { projects } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Section, SectionTitle } from '@/app/components/section';
import { Code, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import GlareHover from '../GlareHover';

export function Projects({ id }: { id: string }) {
  return (
    <Section id={id}>
      <SectionTitle>Featured Projects</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <GlareHover
            key={project.title}
            width="100%"
            height="100%"
            background="rgba(0,0,0,0.3)"
            borderRadius="var(--radius)"
            borderColor="hsl(var(--border) / 0.1)"
            glareColor="hsl(var(--primary))"
            glareOpacity={0.05}
            className="h-full"
          >
            <Card className="flex flex-col h-full bg-transparent border-transparent">
              <CardHeader>
                  <div className="flex justify-between items-center">
                      <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                      {project.category && <Badge variant="outline" className="border-primary text-primary">{project.category}</Badge>}
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
                  {project.liveUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Live
                      </Link>
                    </Button>
                  )}
                  {project.codeUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                        <Code className="mr-2 h-4 w-4" /> Code
                      </Link>
                    </Button>
                  )}
                </div>
              </CardFooter>
            </Card>
          </GlareHover>
        ))}
      </div>
    </Section>
  );
}
