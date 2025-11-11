'use client';
import { experience } from '@/lib/data';
import { Section, SectionTitle } from '@/app/components/section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import GlareHover from '../GlareHover';

export function Experience({ id }: { id: string }) {
  return (
    <Section id={id}>
      <SectionTitle>Experience</SectionTitle>
      <div className="relative max-w-4xl mx-auto px-4">
        {/* Vertical timeline bar */}
        <div
          className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-0.5 bg-border/50"
          aria-hidden="true"
        ></div>

        <div className="space-y-12">
          {experience.map((job, index) => (
            <div
              key={index}
              className={`relative flex items-center w-full ${
                index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
              }`}
            >
              <div
                className={`hidden md:block w-5/12 ${
                  index % 2 === 0 ? 'order-1' : 'order-3'
                }`}
              />

              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background z-10" />

              <div
                className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:order-3' : 'md:order-1'
                }`}
              >
                <GlareHover
                  width="100%"
                  height="100%"
                  background="hsl(var(--card))"
                  borderRadius="var(--radius)"
                  borderColor="hsl(var(--border) / 0.5)"
                  glareColor="hsl(var(--primary))"
                  glareOpacity={0.1}
                >
                  <Card className="w-full bg-transparent border-transparent">
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
                </GlareHover>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
