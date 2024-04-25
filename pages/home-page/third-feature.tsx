import { Button } from '@/components/button';
import { Container } from '@/layout';
import Image from 'next/image';

const OPTIONS = [
  'Scale your business and sales model.',
  'Unlock the power of data analytics.',
  'A complete digital solution.',
];

function ThirdFeature() {
  return (
    <Container
      as='section'
      className='mb-20 mt-16 flex items-center justify-between gap-x-5 gap-y-7 max-md:flex-col'
    >
      <div>
        <Image
          alt='message'
          height={500}
          src='/images/activity.webp'
          width={450}
        />
      </div>

      <div className=''>
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

        <h1 className='mt-3 max-w-md text-2xl font-medium md:text-3xl lg:text-4xl'>
          <span className='bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent'>
            The best way to improve your users
          </span>{' '}
          <span className='text-blue-500'>experience</span>
        </h1>
        <ul className='mb-7 mt-5 space-y-3'>
          {OPTIONS.map((option) => (
            <li className='flex items-center gap-4'>
              <Image
                alt='logo'
                height={20}
                src='/icons/tick-circle.svg'
                width={20}
              />

              <p>{option}</p>
            </li>
          ))}
        </ul>

        <Button className='' variant='dark'>
          Get Started
        </Button>
      </div>
    </Container>
  );
}

export default ThirdFeature;
