
import Link from 'next/link';
import { AnchorHTMLAttributes, ReactNode } from 'react';

import {
  buttonSizes,
  buttonVariants,
  ButtonSize,
  ButtonVariant,
} from './button';

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`
        inline-flex items-center justify-center gap-2
        rounded-full font-sans font-medium
        transition-colors duration-200
        focus-visible:outline-2 focus-visible:outline-offset-2
        focus-visible:outline-brand-rose
        ${buttonVariants[variant]}
        ${buttonSizes[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </Link>
  );
}
