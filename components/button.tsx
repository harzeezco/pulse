/* eslint-disable react/button-has-type */
import { cn } from '@/utils/cn';
import React, { ReactNode } from 'react';

const Variants = {
  primary:
    'flex gap-3 cursor-pointer text-white bg-blue-500 px-7 py-3 rounded-full border border-[#5964ff] hover:scale-105 shadow-btn duration-200 hover:shadow-sm ',
  outline: '',
  dark: 'rounded-[100px] bg-dark-400 px-8 py-3 text-white shadow-header hover:bg-dark-400/60 active:bg-dark-400/60',
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
