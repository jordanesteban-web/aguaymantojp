import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  onDark = false,
  className,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  onDark?: boolean;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <span className={cn("eyebrow", onDark && "text-gold-light")}>
          <span
            className={cn("h-px w-8", onDark ? "bg-gold-light/70" : "bg-leaf/60")}
            aria-hidden="true"
          />
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          "mt-3 text-3xl leading-tight sm:text-4xl",
          onDark ? "text-brand-foreground" : "text-brand",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            onDark ? "text-brand-foreground/80" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
      {children}
    </Reveal>
  );
}
