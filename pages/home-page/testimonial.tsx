'use client';

import { Container } from '@/layout';
import Image from 'next/image';
import StarRatings from 'react-star-ratings';

const TESTIMONIAL = [
  {
    rating: 4.9,
    desc: "Pulse transformed our business. It's user-friendly, offers valuable real-time data analysis, top-notch security, and excellent customer support. Highly recommended!",
    avatar: 'avatar.png',
    name: 'Patrick Leukers',
    job: 'Tech lead, Companix',
  },
  {
    rating: 5,
    desc: "Pulse transformed our business. It's user-friendly, offers valuable real-time data analysis, top-notch security, and excellent customer support. Highly recommended!",
  },
  {
    rating: 4.8,
    desc: "Pulse transformed our business. It's user-friendly, offers valuable real-time data analysis, top-notch security, and excellent customer support. Highly recommended!",
  },
  {
    rating: 4.5,
    desc: "Pulse transformed our business. It's user-friendly, offers valuable real-time data analysis, top-notch security, and excellent customer support. Highly recommended!",
    avatar: 'avatar.png',
    name: 'Patrick Leukers',
    job: 'Tech lead, Companix',
  },
];

export default function Testimonial() {
  return (
    <Container as='section' className='mt-20 grid place-items-center'>
      <p className='flex items-center gap-3 text-white'>
        <Image
          alt='logo'
          height={20}
          src='/icons/icon-round.svg'
          width={20}
        />{' '}
        <span className='text-sm font-medium'>Testimonials</span>
      </p>

      <h1 className='mt-5 text-center text-3xl font-medium md:text-4xl lg:text-5xl'>
        <span className='bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-transparent'>
          What our customers say
        </span>
      </h1>

      <p className='my-4 mb-7 max-w-2xl text-center font-medium md:text-lg'>
        Crafted for world-class performance and developed with
        unmatched expertise, Pulse will deliver outstanding results
        every time, without fail.
      </p>

      <div className='relative'>
        <div className='grid place-items-center max-md:gap-y-6 md:grid-cols-2 md:gap-x-5 lg:gap-x-10'>
          {TESTIMONIAL.map(({ avatar, desc, job, name, rating }) => (
            <div
              key={name}
              className='h-fit space-y-4 rounded-[22px] border border-solid border-[#292929] bg-[#1e1e1e] p-4 transition-all duration-300 hover:text-white'
            >
              <StarRatings
                name='rating'
                numberOfStars={5}
                rating={rating}
                starDimension='20px'
                starRatedColor='orange'
                starSpacing='2px'
              />

              <p className='my-4 mb-7 max-w-2xl font-medium md:text-lg'>
                {desc}
              </p>

              {name && (
                <div className='flex items-center gap-4'>
                  <Image
                    alt={name}
                    height={44}
                    src={`/images/${avatar}`}
                    width={44}
                  />
                  <div>
                    <p className='text-[15px] font-medium text-white'>
                      {name}
                    </p>
                    <span className='text-[12px]'>{job}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className='absolute left-1/2 top-1/2 z-[-1] -translate-x-1/2 -translate-y-1/2'>
          <Image
            alt=''
            height={500}
            src='/images/blur.png'
            width={540}
          />
        </div>
      </div>
    </Container>
  );
}
