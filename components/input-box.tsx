import * as React from 'react';
import { cn } from '@/utils/cn';

import { Input } from './input';

interface InputBoxProps {
  className?: string;
  inputClassName?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  renderInner?: () => React.ReactNode;
  type?: string;
  value?: string;
}

export function InputBox({
  className = '',
  inputClassName,
  placeholder = 'e.g Introduction',
  renderInner,
  type = 'text',
  value,
  ...otherProps
}: InputBoxProps) {
  return (
    <div className={cn('relative mt-2 border-[1.5px]', className)}>
      <Input
        className={cn(
          'no-focus border-none pl-5 shadow-none outline-0 placeholder:text-[#7C7C7C]',
          inputClassName,
        )}
        placeholder={placeholder}
        type={type}
        value={value}
        {...otherProps}
      />

      {renderInner && renderInner()}
    </div>
  );
}
