
import { HTMLAttributes } from 'react';

export function Container({
  children,
  className = '',
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-6 md:px-8 lg:px-12 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
