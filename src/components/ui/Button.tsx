import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  className,
  ...props
}) => {
  const baseStyles = "text-sm cursor-pointer uppercase font-bold transition-colors duration-400 min-w-[150px] max-w-[200px]";

  const sizeStyles = {
    small: "text-sm px-3 py-1.5",
    medium: "text-base px-3 py-3",
    large: "text-lg px-5 py-3",
  };

  const variantStyles = {
    primary: "bg-secondary text-white hover:bg-secondary/40",
    secondary: "bg-black text-white hover:bg-black-hover",
    outline: "border border-primary text-black hover:bg-black hover:text-white",
  };

  const combined = clsx(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  return (
    <button className={combined} {...props}>
      {children}
    </button>
  );
};

export default Button;
