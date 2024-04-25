'use client';

import { Button } from '@/components/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/form';
import { Input } from '@/components/input';
import { Textarea } from '@/components/text-area';
import { Container } from '@/layout';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const INFO = [
  {
    icon: 'message.svg',
    label: 'hello@pulse.com',
  },
  {
    icon: 'phone.svg',
    label: '+33 455 67 89 00',
  },
  {
    icon: 'location.svg',
    label: 'Innovation St. 767, CA - USA',
  },
];

const formSchema = z.object({
  name: z
    .string()
    .regex(/^[\s'A-Za-z-]{4,50}$/, {
      message: 'Specify your full name',
    })
    .min(4, {
      message: 'Your full name must be at least 4 characters.',
    })
    .max(20, {
      message:
        'Your full name must not be longer than 20 characters.',
    }),
  to: z.string().regex(/^[\s'A-Za-z-]{4,50}$/),
  email: z
    .string()
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
      message: 'Please Enter a valid email address',
    })
    .min(5),
  message: z
    .string()
    .min(10, {
      message: 'message must be at least 10 characters.',
    })
    .max(360, {
      message: 'Bio must not be longer than 360 characters.',
    }),
});

export default function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      to: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>, e: any) {
    e.preventDefault();
    console.log(values);
    console.log('hello');
  }

  return (
    <Container className='relative z-50 mt-14 grid grid-cols-1 place-items-center gap-10 md:grid-cols-2'>
      <div className='max-md:order-2'>
        <p className='flex items-center gap-3 text-white'>
          <Image
            alt='logo'
            height={20}
            src='/icons/icon-round.svg'
            width={20}
          />{' '}
          <span className='text-sm font-medium'>Contact</span>
        </p>

        <h1 className='mt-3 max-w-md text-2xl font-medium md:text-3xl lg:text-4xl'>
          <span className='bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent'>
            Always <span className='text-blue-500'>available</span>{' '}
            and won&apos;t keep you waiting
          </span>{' '}
        </h1>
        <div className='mt-5 space-y-4'>
          {INFO.map(({ icon, label }) => (
            <div className='flex items-center gap-3'>
              <Image
                alt={icon}
                height={20}
                src={`/icons/${icon}`}
                width={20}
              />

              <p>{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='mx-auto w-full rounded-3xl border border-solid border-dark-400/20 bg-[#14142B] px-8 py-4 max-md:order-1'>
        <Form {...form}>
          <form
            className='my-8 space-y-4'
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel htmlFor='fullname'>From:</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id='fullname'
                      placeholder='Full Name'
                      type='text'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='to'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel htmlFor='lastname'>To:</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id='to'
                      placeholder='Wakil Abdul Azeez'
                      type='text'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='message'
              render={({ field }) => (
                <FormItem className='mb-8'>
                  <FormLabel>Your Message:</FormLabel>
                  <FormControl>
                    <Textarea
                      className='resize-none'
                      placeholder='Please write a message...'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className='mt-6'>
              <Button
                className='flex items-center justify-center'
                size='full'
                type='submit'
                variant='primary'
              >
                Send Message &rarr;
              </Button>
            </div>

            <div className='my-8 h-px w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700' />
          </form>
        </Form>
      </div>
    </Container>
  );
}
