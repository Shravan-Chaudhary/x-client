import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  // other props
}

const Button: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <button
      className={cn(
        "bg-blue hover:bg-blue text-white font-bold px-8 py-4 w-full rounded-full inline-flex items-center justify-center transition-all duration-300",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
