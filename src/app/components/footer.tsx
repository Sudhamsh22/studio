import { personalInfo } from '@/lib/data';

export function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="w-full py-6 px-4 sm:px-6 lg:px-8 border-t border-border/50">
            <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
                <p>&copy; {currentYear} {personalInfo.name}. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
