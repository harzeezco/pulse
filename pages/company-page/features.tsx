import { Button } from '@/components/button';
import { Container } from '@/layout';
import Image from 'next/image';

const OPTIONS = [
  'Scale your business and sales model.',
  'Unlock the power of data analytics.',
  'A complete digital solution.',
];

function Features() {
  return (
    <Container as='section' className='mt-20'>
      <div className='flex items-center justify-between gap-x-5 gap-y-7 max-md:flex-col'>
        <div>
          <Image
            alt='message'
            height={500}
            src='/images/total.png'
            width={400}
          />
        </div>

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
            unmatched expertise, Pulse will deliver outstanding
            results every time, without fail.
          </p>

          <Button className='' variant='dark'>
            Get Started
          </Button>
        </div>
      </div>

      <div className='mt-16 flex items-center justify-between gap-x-5 gap-y-7 max-md:flex-col max-sm:flex-col-reverse'>
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

        <div>
          <Image
            alt='message'
            height={500}
            src='/images/star.png'
            width={450}
          />
        </div>
      </div>
    </Container>
  );
}

export default Features;
