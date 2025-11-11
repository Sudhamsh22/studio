import { personalInfo } from '@/lib/data';
import { Section, SectionTitle } from '@/app/components/section';
import { Card, CardContent } from '@/components/ui/card';
import GlareHover from '../GlareHover';

export function About({ id }: { id:string }) {
    return (
        <Section id={id}>
            <SectionTitle>About Me</SectionTitle>
            <div className="max-w-4xl mx-auto">
              <GlareHover
                width="100%"
                height="100%"
                background="rgba(0,0,0,0.3)"
                borderRadius="var(--radius)"
                borderColor="hsl(var(--border) / 0.1)"
                glareColor="hsl(var(--primary))"
                glareOpacity={0.05}
              >
                <Card className="bg-transparent border-transparent">
                    <CardContent className="pt-6">
                        <p className="text-foreground/80 leading-relaxed text-center text-lg">
                            {personalInfo.summary}
                        </p>
                    </CardContent>
                </Card>
              </GlareHover>
            </div>
        </Section>
    );
}
