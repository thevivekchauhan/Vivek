import React from "react";

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const Card = React.forwardRef(function Card({ className, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={cn(
        "rounded-4 border bg-dark text-light shadow-sm",
        className,
      )}
      {...props}
    />
  );
}); 