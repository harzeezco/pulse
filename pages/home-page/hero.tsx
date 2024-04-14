import { Button } from '@/components/button';
import { Container } from '@/layout';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className='relative'>
      <Container className='relative z-50 mt-20 flex flex-col items-center'>
        <p className='flex items-center gap-3 text-white'>
          <Image
            alt='logo'
            height={20}
            src='/icons/icon-round.svg'
            width={20}
          />{' '}
          <span className='text-sm font-medium'>
            Join the revolution
          </span>
        </p>

        <h1 className='mt-5 max-w-2xl text-center text-3xl font-medium md:text-4xl lg:text-5xl'>
          <span className='bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-transparent'>
            The best way to improve your users
          </span>{' '}
          <span className='text-blue-500'>experience</span>
        </h1>

        <p className='my-4 mb-7 max-w-2xl text-center font-medium md:text-lg'>
          Crafted for world-class performance and developed with
          unmatched expertise, Pulse will deliver outstanding results
          every time, without fail.
        </p>

        <Button className='' variant='dark'>
          Get Started
        </Button>

        <div className='mt-10'>
          <Image
            alt='board'
            height={385}
            src='/images/board.webp'
            width={744}
          />
        </div>
      </Container>
      <div className='absolute inset-x-0 bottom-0 -z-10 w-full'>
        <Image
          alt='grid'
          className='w-full opacity-45 max-sm:h-[270px] sm:h-[430px] lg:h-auto'
          height={610}
          src='/images/grid.png'
          width={1200}
        />
      </div>
    </section>
  );
}
