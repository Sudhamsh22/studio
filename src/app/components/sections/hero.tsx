import { personalInfo } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';

export function Hero({ id }: { id: string }) {
  return (
    <section id={id} className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-background"></div>

        <div className="relative z-10 flex flex-col items-center">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="text-center md:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-headline font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-primary to-accent">
                    {personalInfo.name}
                </h1>
                <p className="mt-4 max-w-2xl text-xl md:text-2xl text-foreground/80 font-headline">
                    {personalInfo.tagline}
                </p>
              </div>
              <div className="flex-shrink-0">
                <Image
                  src="/my-photo.jpg"
                  alt="Siva Sudhamsh Gandikota"
                  width={200}
                  height={200}
                  className="rounded-xl border-4 border-primary/20 object-cover shadow-lg"
                  priority
                />
              </div>
            </div>

            <p className="mt-8 max-w-3xl mx-auto text-base md:text-lg text-foreground/60 text-center">
                {personalInfo.summary}
            </p>
            <div className="mt-8 flex justify-center gap-4">
                {personalInfo.socials.map((social) => (
                    <Button key={social.name} variant="outline" size="icon" asChild>
                        <Link href={social.url} target="_blank" aria-label={social.name}>
                            <social.icon className="h-5 w-5" />
                        </Link>
                    </Button>
                ))}
                 <Button asChild>
                    <Link href="#contact">Contact Me</Link>
                </Button>
            </div>
        </div>

        <div className="absolute bottom-10 z-10">
          <Link href="#about" aria-label="Scroll to about section">
            <ArrowDown className="h-8 w-8 text-foreground/50 animate-bounce" />
          </Link>
        </div>
    </section>
  );
}
