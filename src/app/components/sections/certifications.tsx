import { certifications } from '@/lib/data';
import { Section, SectionTitle } from '@/app/components/section';
import { Card, CardContent } from '@/components/ui/card';
import { Award } from 'lucide-react';
import GlareHover from '../GlareHover';

export function Certifications({ id }: { id: string }) {
  return (
    <Section id={id}>
      <SectionTitle>Certifications</SectionTitle>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
        {certifications.map((cert, index) => (
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
            <Card className="bg-transparent border-transparent h-full">
              <CardContent className="p-4 flex items-center gap-4 h-full">
                <div className="p-2 bg-primary/10 rounded-md">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{cert.name}</p>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
              </CardContent>
            </Card>
          </GlareHover>
        ))}
      </div>
    </Section>
  );
}
