import { experience } from '@/lib/data';
import { Section, SectionTitle } from '@/app/components/section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Experience({ id }: { id: string }) {
  return (
    <Section id={id}>
      <SectionTitle>Experience</SectionTitle>
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical timeline bar */}
        <div
          className="absolute left-0 md:left-1/2 -translate-x-1/2 w-0.5 h-full bg-border/50"
          aria-hidden="true"
        ></div>

        {experience.map((job, index) => (
          <div
            key={index}
            className={cn(
              'relative mb-12 flex w-full items-start',
              'md:w-1/2',
              index % 2 === 0 ? 'md:ml-0 md:mr-auto' : 'md:ml-auto md:pl-16',
              index % 2 !== 0 && 'md:text-right'
            )}
          >
            {/* Timeline dot */}
            <div className={cn(
                "absolute top-1.5 mt-1 w-4 h-4 rounded-full bg-primary ring-4 ring-background z-10",
                index % 2 === 0 ? "left-[-7px] md:left-auto md:right-[-39px]" : "left-[-7px] md:left-auto"
            )} />
            
            <Card className="w-full relative bg-card/50 backdrop-blur-sm ml-8 md:ml-0">
              <CardHeader>
                <div className={cn(
                    "flex gap-2",
                    index % 2 !== 0 ? "justify-between flex-row-reverse" : "justify-between"
                )}>
                  <div>
                    <CardTitle className="font-headline text-xl">{job.role}</CardTitle>
                    <CardDescription className="text-base text-foreground/80">{job.company}</CardDescription>
                  </div>
                  <p className="text-sm text-muted-foreground whitespace-nowrap">{job.period}</p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className={cn("space-y-3", index % 2 !== 0 && "md:text-left")}>
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