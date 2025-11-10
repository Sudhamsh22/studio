import { personalInfo } from '@/lib/data';
import { Section, SectionTitle } from '@/app/components/section';

export function About({ id }: { id:string }) {
    return (
        <Section id={id} className="text-center">
            <SectionTitle>About Me</SectionTitle>
            <p className="max-w-4xl mx-auto text-lg md:text-xl text-foreground/80 leading-relaxed">
                {personalInfo.summary}
            </p>
        </Section>
    );
}
