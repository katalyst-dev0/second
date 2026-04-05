import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-foreground text-background",
        hero: "bg-primary text-primary-foreground rounded-full px-6 py-3 text-base font-medium hover:bg-primary/90",
        heroSecondary:
          "liquid-glass text-foreground rounded-full px-6 py-3 text-base font-normal hover:bg-white/5",
      },
      size: {
        default: "px-4 py-2",
        sm: "px-3 py-1.5 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

const Button = ({ className, variant, size, ...props }: ButtonProps) => {
  return <button className={cn(buttonVariants({ variant, size, className }))} {...props} />;
};

export { Button, buttonVariants };
