import { leadership } from '@/lib/data';
import { Section, SectionTitle } from '@/app/components/section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import GlareHover from '../GlareHover';

export function Leadership({ id }: { id: string }) {
  return (
    <Section id={id}>
      <SectionTitle>Leadership &amp; Activities</SectionTitle>
      <div className="max-w-3xl mx-auto space-y-8">
        {leadership.map((item, index) => (
          <GlareHover
            key={index}
            width="100%"
            height="100%"
            background="rgba(0,0,0,0.3)"
            borderRadius="var(--radius)"
            borderColor="hsl(var(--border) / 0.1)"
            glareColor="hsl(var(--primary))"
            glareOpacity={0.05}
          >
            <Card className="bg-transparent border-transparent">
              <CardHeader>
                  <div className="flex justify-between items-start">
                      <div>
                          <CardTitle className="font-headline text-xl">{item.role}</CardTitle>
                          <CardDescription className="text-base text-foreground/80">{item.organization}</CardDescription>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.period}</p>
                  </div>
              </CardHeader>
              <CardContent>
                  <ul className="space-y-3">
                      {item.description.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-start gap-3">
                              <CheckCircle2 className="h-4 w-4 mt-1 shrink-0 text-primary" />
                              <span className="text-foreground/80">{point}</span>
                          </li>
                      ))}
                  </ul>
              </CardContent>
            </Card>
          </GlareHover>
        ))}
      </div>
    </Section>
  );
}
