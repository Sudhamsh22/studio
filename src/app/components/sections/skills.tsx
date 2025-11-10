import { skills } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Section, SectionTitle } from '@/app/components/section';

export function Skills({ id }: { id: string }) {
  const skillCategories = Object.values(skills);

  return (
    <Section id={id}>
      <SectionTitle>My Skillset</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <Card key={category.title} className="bg-card/50 border-border/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-headline text-primary">{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <Badge key={skill.name} variant="secondary" className="flex items-center gap-2 text-sm font-normal border-transparent bg-secondary/50">
                    {skill.icon && <skill.icon className="h-4 w-4 text-foreground/70" />}
                    <span>{skill.name}</span>
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
