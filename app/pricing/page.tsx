import Pricing from '@/components/pricing';
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
          <span className='text-sm font-medium'>Pricing & plans</span>
        </p>

        <h1 className='mt-5 max-w-2xl text-center text-3xl font-medium md:text-4xl lg:text-5xl'>
          <span className='bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-transparent'>
            A perfect plan for
          </span>{' '}
          <span className='text-blue-500'>everybody</span>
        </h1>

        <p className='my-4 mb-16 max-w-2xl text-center font-medium md:text-lg'>
          Crafted for world-class performance and developed with
          unmatched expertise, Pulse will deliver outstanding results
          every time, without fail.
        </p>

        <Pricing hasHeader={false} />
      </Container>
    </section>
  );
}
