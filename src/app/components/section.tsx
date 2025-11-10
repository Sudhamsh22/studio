import type { ElementRef, HTMLAttributes } from 'react';
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

const Section = forwardRef<ElementRef<'section'>, HTMLAttributes<HTMLElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          'w-full max-w-6xl mx-auto py-20 md:py-28 px-4 sm:px-6 lg:px-8',
          className
        )}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = 'Section';

const SectionTitle = forwardRef<
  ElementRef<'h2'>,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => {
  return (
    <h2
      ref={ref}
      className={cn(
        'text-3xl md:text-4xl font-headline font-bold text-center mb-12 text-primary',
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
});

SectionTitle.displayName = 'SectionTitle';

export { Section, SectionTitle };
