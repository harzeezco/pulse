import { Button } from '@/components/button';
import { Container } from '@/layout';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Container className='relative z-50 mt-20 flex flex-col items-center'>
      <p className='flex items-center gap-3 text-white'>
        <Image
          alt='logo'
          height={20}
          src='/icons/icon-round.svg'
          width={20}
        />{' '}
        <span className='text-sm font-medium'>404</span>
      </p>

      <h1 className='mt-5 max-w-2xl text-center text-3xl font-medium md:text-4xl lg:text-5xl'>
        <span className='bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-transparent'>
          Page not found
        </span>{' '}
      </h1>

      <p className='my-4 mb-7 max-w-sm text-center font-medium md:text-lg'>
        This page doesn’t exist or was removed! We suggest you go back
        to home.
      </p>

      <Link href='/'>
        <Button className='' variant='dark'>
          Go back home
        </Button>
      </Link>
    </Container>
  );
}
