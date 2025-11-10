import { personalInfo } from '@/lib/data';
import { Section, SectionTitle } from '@/app/components/section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function About({ id }: { id:string }) {
    return (
        <Section id={id}>
            <SectionTitle>About Me</SectionTitle>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl text-primary">{personalInfo.tagline}</CardTitle>
                    </CardHeader>
                </Card>
                 <Card className="bg-card/50 backdrop-blur-sm border-border/50 md:col-span-1">
                    <CardContent className="pt-6">
                        <p className="text-foreground/80 leading-relaxed">
                            {personalInfo.summary}
                        </p>
                    </CardContent>
                </Card>
            </div>
        </Section>
    );
}
