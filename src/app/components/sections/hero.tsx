'use client';
import { personalInfo } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown, Download } from 'lucide-react';
import Image from 'next/image';

export function Hero({ id }: { id: string }) {
  return (
    <section id={id} className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-transparent"></div>

        <div className="relative z-10 flex flex-col items-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-6xl mx-auto">
              <div className="text-center md:text-left md:w-2/3">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-headline font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-primary to-accent">
                    {personalInfo.name}
                </h1>
                <p className="mt-4 text-xl md:text-2xl text-foreground/80 font-headline">
                    {personalInfo.tagline}
                </p>
                <p className="mt-6 text-base md:text-lg text-foreground/60">
                  {personalInfo.summary}
                </p>
                <div className="mt-8 flex justify-center md:justify-start flex-wrap gap-4">
                    <Button asChild size="lg" variant="outline">
                        <Link href="/resume.pdf" download="Siva-Sudhamsh-Gandikota-Resume.pdf">
                            <Download className="mr-2 h-5 w-5" />
                            Download Resume
                        </Link>
                    </Button>
                </div>
              </div>
              <div className="flex-shrink-0 md:w-1/3 flex justify-center">
                <Image
                  src="/my-photo.jpg"
                  alt="Siva Sudhamsh Gandikota"
                  width={320}
                  height={320}
                  className="rounded-xl border-4 border-primary/20 object-cover shadow-lg"
                  priority
                />
              </div>
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
