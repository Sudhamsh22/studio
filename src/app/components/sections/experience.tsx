'use client';
import { experience } from '@/lib/data';
import { Section, SectionTitle } from '@/app/components/section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Experience({ id }: { id: string }) {
  return (
    <Section id={id}>
      <SectionTitle>Experience</SectionTitle>
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical timeline bar */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-border/50"
          aria-hidden="true"
        ></div>

        {experience.map((job, index) => (
          <div key={index} className="relative mb-12 flex justify-center w-full">
            <div className="w-full px-4">
              {/* Timeline dot */}
              <div className="absolute top-2 w-4 h-4 rounded-full bg-primary ring-4 ring-background z-10 left-1/2 -translate-x-1/2" />

              <Card className="mx-auto w-full bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <div className="text-left">
                      <CardTitle className="font-headline text-xl">{job.role}</CardTitle>
                      <CardDescription className="text-base text-foreground/80">{job.company}</CardDescription>
                    </div>
                    <p className="text-sm text-muted-foreground whitespace-nowrap">{job.period}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-left">
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
          </div>
        ))}
      </div>
    </Section>
  );
}
