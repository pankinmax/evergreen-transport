import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Premium, industrial button. Squared-but-soft corners, confident weight,
 * no gradients. The feel comes from size, spacing and colour discipline.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-xl font-semibold tracking-tight transition-[background-color,border-color,color,transform] duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moss disabled:pointer-events-none disabled:opacity-50 active:scale-[0.99] cursor-pointer [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-forest text-forest-foreground hover:bg-forest-hover shadow-[var(--shadow-soft)]",
        outline:
          "border border-line-strong bg-background text-ink hover:border-forest hover:text-forest",
        outlineLight:
          "border border-white/70 bg-transparent text-white hover:bg-white hover:text-ink hover:border-white",
        ghost: "text-ink hover:bg-panel",
      },
      size: {
        md: "h-12 px-6 text-[0.95rem] [&_svg]:size-[1.1rem]",
        lg: "h-14 px-8 text-base [&_svg]:size-5",
        xl: "h-16 px-9 text-[1.05rem] [&_svg]:size-5",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
