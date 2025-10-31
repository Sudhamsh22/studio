import { Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2 font-headline text-xl font-bold text-foreground overflow-hidden", className)}>
      <div className="p-2 rounded-lg shrink-0">
        <Briefcase className="h-5 w-5 text-primary" />
      </div>
      <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-150">
        CorporateIntern
      </span>
    </div>
  );
}
