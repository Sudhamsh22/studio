import { certifications } from '@/lib/data';
import { Section, SectionTitle } from '@/app/components/section';
import { Card, CardContent } from '@/components/ui/card';
import { Award } from 'lucide-react';

export function Certifications({ id }: { id: string }) {
  return (
    <Section id={id}>
      <SectionTitle>Certifications</SectionTitle>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
        {certifications.map((cert, index) => (
          <Card key={index} className="bg-card/50 border-transparent">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="p-2 bg-primary/10 rounded-md">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{cert.name}</p>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
