'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as React from 'react';
import { cn } from '@/utils/cn';
import { ChevronDown } from 'lucide-react';

const Accordion: any = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & {
    className?: string;
  }
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn('', className)}
    {...props}
  />
));

AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<
    typeof AccordionPrimitive.Trigger
  > & {
    className?: string;
  }
>(({ children, className, ...props }, ref) => (
  <AccordionPrimitive.Header className='flex'>
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'flex flex-1 items-center justify-between py-4 font-medium transition-all [&[data-state=open]>span]:rotate-180',
        className,
      )}
      {...props}
    >
      {children}
      <span className='grid size-6 place-items-center rounded-md border border-solid'>
        <ChevronDown className='size-4 shrink-0 transition-transform duration-200' />
      </span>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<
    typeof AccordionPrimitive.Content
  > & {
    className?: string;
  }
>(({ children, className, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className='overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down'
    {...props}
  >
    <div className={cn('pb-4 pt-0', className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
};
