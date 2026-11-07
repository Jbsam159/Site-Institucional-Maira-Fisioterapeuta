
import { ButtonHTMLAttributes } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

export const buttonVariants: Record<ButtonVariant, string> = {
  primary: 'bg-brand-rose text-white hover:bg-brand-rose/90',
  secondary: 'bg-brand-pink text-brand-rose hover:bg-brand-pink/80',
  outline: 'border border-brand-rose text-brand-rose hover:bg-brand-light',
};

export const buttonSizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`
        inline-flex items-center justify-center gap-2
        rounded-full font-sans font-medium
        transition-colors duration-200
        focus-visible:outline-2 focus-visible:outline-offset-2
        focus-visible:outline-brand-rose
        disabled:cursor-not-allowed disabled:opacity-50
        ${buttonVariants[variant]}
        ${buttonSizes[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
