import { Button } from '@/components/button';
import { Container } from '@/layout';
import Image from 'next/image';

function FirstFeature() {
  return (
    <Container
      as='section'
      className='mt-14 flex items-center justify-between gap-y-7 max-md:flex-col'
    >
      <div>
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

        <h1 className='mt-5 max-w-md text-2xl font-medium md:text-3xl lg:text-4xl'>
          <span className='bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent'>
            The best way to improve your users
          </span>{' '}
          <span className='text-blue-500'>experience</span>
        </h1>

        <p className='mb-7 mt-3 max-w-lg font-medium md:text-lg'>
          Crafted for world-class performance and developed with
          unmatched expertise, Pulse will deliver outstanding results
          every time, without fail.
        </p>

        <Button className='' variant='dark'>
          Get Started
        </Button>
      </div>

      <div>
        <Image
          alt='message'
          height={500}
          src='/images/message.webp'
          width={400}
        />
      </div>
    </Container>
  );
}

export default FirstFeature;
