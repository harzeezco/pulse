/* eslint-disable react/button-has-type */
import { cn } from '@/utils/cn';
import React, { ReactNode } from 'react';

const Variants = {
  primary: 'bg-green-500 text-white active:scale-95',
  outline: '',
};

const sizes = {
  sm: 'px-7 py-3 rounded-[10px]',
  md: 'px-7 py-3 font-medium w-fit',
};

type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string | ReactNode;
  className?: string;
  size?: keyof typeof sizes;
  type?: string;
  variant?: keyof typeof Variants;
};

export function Button({
  children = null,
  className = '',
  size,
  type = 'button',
  variant = 'primary',
  ...otherProps
}: ButtonType) {
  return (
    <button
      className={cn(
        'disabled:opacity-70 font-medium whitespace-nowrap transition-all duration-500 ease-out disabled:cursor-not-allowed focus:outline-none',
        Variants[variant],
        sizes[size as keyof typeof sizes],
        className,
      )}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
}
