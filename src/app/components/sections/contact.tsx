import { personalInfo } from '@/lib/data';
import { Section, SectionTitle } from '@/app/components/section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Contact({ id }: { id: string }) {
  return (
    <Section id={id} className="text-center">
      <SectionTitle>Get In Touch</SectionTitle>
      <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
        I'm currently open to new opportunities and collaborations. If you have a project in mind or just want to connect, feel free to reach out.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button size="lg" asChild>
          <Link href={`mailto:${personalInfo.contact.email}`}>
            Email Me
          </Link>
        </Button>
        {personalInfo.socials.map((social) => (
          social.name !== 'Email' && (
            <Button key={social.name} variant="outline" size="lg" asChild>
              <Link href={social.url} target="_blank" rel="noopener noreferrer">
                <social.icon className="mr-2 h-5 w-5" />
                {social.name}
              </Link>
            </Button>
          )
        ))}
      </div>
    </Section>
  );
}
