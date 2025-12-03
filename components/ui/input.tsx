import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-[48px] rounded-md border px-4 py-5 text-base font-light outline-none transition-colors",
          "bg-white text-neutral-900 border-neutral-200 placeholder:text-neutral-500 focus:border-accent",
          "dark:bg-primary dark:text-white dark:border-white/10 dark:placeholder:text-white/60",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
