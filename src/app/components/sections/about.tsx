import { personalInfo } from '@/lib/data';
import { Section, SectionTitle } from '@/app/components/section';
import { Card, CardContent } from '@/components/ui/card';

export function About({ id }: { id:string }) {
    return (
        <Section id={id}>
            <SectionTitle>About Me</SectionTitle>
            <div className="max-w-4xl mx-auto">
                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                    <CardContent className="pt-6">
                        <p className="text-foreground/80 leading-relaxed text-center text-lg">
                            {personalInfo.summary}
                        </p>
                    </CardContent>
                </Card>
            </div>
        </Section>
    );
}
