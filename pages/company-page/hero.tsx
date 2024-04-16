import { Button } from '@/components/button';
import { Container } from '@/layout';
import Image from 'next/image';

function Hero() {
  return (
    <Container
      as='section'
      className='relative z-50 mt-20 flex flex-col items-center'
    >
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
          Unlock the full{' '}
          <span className='text-blue-500'>potential</span> of your
          platform
        </span>{' '}
      </h1>

      <p className='my-4 mb-7 max-w-2xl text-center font-medium md:text-lg'>
        Crafted for world-class performance and developed with
        unmatched expertise, Pulse will deliver outstanding results
        every time, without fail.
      </p>

      <Button className='' variant='dark'>
        Contact Us
      </Button>
    </Container>
  );
}

export default Hero;
