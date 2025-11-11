import { skills } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Section, SectionTitle } from '@/app/components/section';
import GlareHover from '../GlareHover';

export function Skills({ id }: { id: string }) {
  const skillCategories = Object.values(skills);

  return (
    <Section id={id}>
      <SectionTitle>My Skillset</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <GlareHover
            key={category.title}
            width="100%"
            height="100%"
            background="rgba(0,0,0,0.3)"
            borderRadius="var(--radius)"
            borderColor="hsl(var(--border) / 0.1)"
            glareColor="hsl(var(--primary))"
            glareOpacity={0.05}
          >
            <Card className="bg-transparent border-transparent h-full">
              <CardHeader>
                <CardTitle className="text-xl font-headline text-primary">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <Badge key={skill.name} variant="secondary" className="flex items-center gap-2 text-sm font-normal">
                      {skill.icon && <skill.icon className="h-4 w-4 text-foreground/70" />}
                      <span>{skill.name}</span>
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </GlareHover>
        ))}
      </div>
    </Section>
  );
}
