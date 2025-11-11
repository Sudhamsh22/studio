import { achievements } from '@/lib/data';
import { Section, SectionTitle } from '@/app/components/section';
import { Star } from 'lucide-react';

export function Achievements({ id }: { id: string }) {
  return (
    <Section id={id}>
      <SectionTitle>Key Achievements</SectionTitle>
      <div className="max-w-2xl mx-auto">
        <ul className="space-y-4">
          {achievements.map((achievement, index) => (
            <li key={index} className="flex items-start gap-4 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/10">
              <Star className="h-5 w-5 mt-1 shrink-0 text-primary" />
              <span className="text-foreground/90">{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
