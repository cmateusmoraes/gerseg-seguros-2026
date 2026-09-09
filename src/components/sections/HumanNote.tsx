import { MessagesSquare } from "lucide-react";
import { cn } from "@/lib/utils";

/** Small, non-interactive reminders of Gerseg's personal approach. */
export function HumanNote({ children, onDark = false, className }: {
  children: React.ReactNode;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <p className={cn("inline-flex max-w-full items-center gap-2.5 rounded-full border px-4 py-2.5 text-xs font-medium leading-5", onDark ? "border-gold/30 text-gold" : "border-navy/15 bg-surface text-navy", className)}>
      <MessagesSquare size={16} strokeWidth={1.5} className="shrink-0" aria-hidden="true" />
      <span>{children}</span>
    </p>
  );
}
