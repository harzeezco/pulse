import { Container } from '@/layout';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookSquare, FaLinkedinIn } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

const socials = [
  {
    icon: <FaFacebookSquare />,
    href: 'https://www.facebook.com/tsrlearningllc',
    externalRoute: false,
  },
  {
    icon: <FaLinkedinIn />,
    href: 'https://www.linkedin.com/company/tsrlearning/',
    externalRoute: false,
  },
  {
    icon: <RiInstagramFill />,
    href: 'https://www.instagram.com/tsrlearning/',
    externalRoute: true,
  },
];

const TEAMS = [
  {
    banner: 'anna.png',
    name: 'Anna Moore',
    job: 'Marketing Strategist',
  },
  {
    banner: 'david.png',
    name: 'David Beckham',
    job: 'C.E.O',
  },
  {
    banner: 'tosin.png',
    name: 'Tosin Adams',
    job: 'Developer Advocate',
  },
];

function Teams() {
  return (
    <Container as='section' className='mt-16'>
      <div className='flex items-center justify-between gap-y-3 max-lg:flex-col max-lg:items-start'>
        <h1 className='text-4xl font-medium'>Awesome team</h1>

        <p className='max-w-lg font-medium md:text-lg'>
          Crafted for world-class performance and developed with
          unmatched expertise.
        </p>
      </div>

      <ul className='mx-auto mt-7 flex shrink grid-cols-1 flex-wrap place-items-center justify-center gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3'>
        {TEAMS.map(({ banner, job, name }) => (
          <li className='relative'>
            <Image
              alt={name}
              height={400}
              src={`/images/${banner}`}
              width={350}
            />

            <div className='absolute bottom-3 left-1/2 w-4/5 -translate-x-1/2 rounded-[22px] border  border-solid border-[#292929] bg-[#1e1e1e] p-4'>
              <p className='font-medium text-white'>{name}</p>
              <span className='text-sm'>{job}</span>

              <div className='mt-3 flex gap-3'>
                {socials.map(({ href, icon }) => (
                  <Link href={href} target='_blank'>
                    <button
                      className='grid size-11 place-items-center rounded-[16px] border-[1.5px] border-solid border-[#292929] text-white transition-all hover:bg-blue-500'
                      type='button'
                    >
                      <span className='text-[20px]'>{icon}</span>
                    </button>
                  </Link>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default Teams;
