import { personalInfo } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero({ id }: { id: string }) {
  const profileImage = PlaceHolderImages.find(p => p.id === 'profile-picture');
  return (
    <section id={id} className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-background"></div>

        <div className="relative z-10 flex flex-col items-center">
            {profileImage && (
              <div className="mb-8">
                <Image
                  src={profileImage.imageUrl}
                  alt="Siva Sudhamsh Gandikota"
                  width={160}
                  height={160}
                  className="rounded-full border-4 border-primary/50 object-cover shadow-lg"
                  priority
                  data-ai-hint={profileImage.imageHint}
                />
              </div>
            )}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-headline font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-primary to-accent">
                {personalInfo.name}
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl md:text-2xl text-foreground/80 font-headline">
                {personalInfo.tagline}
            </p>
            <p className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-foreground/60">
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
