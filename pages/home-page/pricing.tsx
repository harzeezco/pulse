import { Button } from '@/components/button';
import { Container } from '@/layout';
import Image from 'next/image';
import Link from 'next/link';

const PRICING = [
  {
    plan: 'Personal',
    amount: 12.99,
    category: 'user',
    type: 'normal',
    features: [
      'Free licensed icons',
      'Fast and free standard shipping',
      'No credit card required',
      'Friendly supports',
    ],
    height: '430px',
  },
  {
    plan: 'Professional',
    amount: 59.99,
    category: 'team',
    type: 'popular',
    features: [
      'Full access to all features',
      'Fast and free standard shipping',
      'No credit card required',
      'Use on unlimited projects',
      'Team collaboration feature.',
      'Friendly supports',
    ],
    height: '510px',
  },
  {
    plan: 'Enterprise',
    amount: 99.99,
    category: 'team',
    type: 'normal',
    features: [
      'All features in Pro Plan.',
      'Use on unlimited projects',
      'Team collaboration feature.',
      'Friendly supports',
    ],
    height: '430px',
  },
];

export default function Pricing() {
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
          <span className='text-sm font-medium'>Pricing</span>
        </p>

        <h1 className='mt-2 max-w-2xl text-center text-3xl font-medium md:text-4xl lg:text-5xl'>
          <span className='bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-transparent'>
            A perfect plan for everybody
          </span>
        </h1>

        <p className='my-4 mb-7 max-w-2xl text-center font-medium md:text-lg'>
          Crafted for world-class performance and developed with
          unmatched expertise, Pulse will deliver outstanding results
          every time, without fail.
        </p>

        <div className='md: relative z-[99] mx-auto flex shrink grid-cols-1 flex-wrap place-items-center justify-center gap-10 lg:grid lg:grid-cols-3'>
          {PRICING.map(
            ({ amount, category, features, height, plan, type }) => (
              <div
                key={amount}
                className='relative rounded-[22px] border border-solid border-[#292929] bg-[#1e1e1e] p-6 text-center transition-all duration-300'
                style={{ height }}
              >
                {type === 'popular' && (
                  <span className='absolute right-3 top-3 rounded-lg bg-blue-500/30 p-1 px-3 text-sm text-white'>
                    Popular
                  </span>
                )}

                <div className='pt-7'>
                  <span className='text-lg font-medium text-white lg:text-xl'>
                    {plan}
                  </span>

                  <p className='mt-5 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-2xl font-bold text-transparent lg:text-4xl'>
                    ${amount}
                    <span className='text-sm font-normal'>
                      /{category}
                    </span>
                  </p>

                  <div className='mb-4 mt-7 space-y-4 border-t border-solid py-4 text-start'>
                    {features.map((feature) => (
                      <div className='grid grid-cols-[auto_1fr] gap-3'>
                        <Image
                          alt='checked'
                          height={20}
                          src='/icons/tick-circle.svg'
                          width={20}
                        />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href='/sign-up'>
                    <Button
                      className='flex justify-center'
                      size='full'
                      variant='primary'
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            ),
          )}
        </div>
      </Container>
    </section>
  );
}
