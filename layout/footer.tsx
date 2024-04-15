import { Button } from '@/components/button';
import { InputBox } from '@/components/input-box';
import Logo from '@/components/logo';
import { Container } from '@/layout';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookSquare, FaLinkedinIn } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

const INFO = [
  {
    icon: 'message.svg',
    label: 'hello@pulse.com',
  },
  {
    icon: 'phone.svg',
    label: '+33 455 67 89 00',
  },
  {
    icon: 'location.svg',
    label: 'Innovation St. 767, CA - USA',
  },
];

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

type FooterProps = {
  links: { href: string; label: string }[];
  title: string;
};

const FooterNav: FooterProps[] = [
  {
    title: 'Pages',
    links: [
      {
        label: 'Home',
        href: '/',
      },
      {
        label: 'Blog',
        href: '/blog',
      },
      {
        label: 'DevOps',
        href: '/devops',
      },
      {
        label: 'Cloud Computing',
        href: '/cloud-computing',
      },
    ],
  },
  {
    title: 'Company',
    links: [
      {
        label: 'Terms Conditions',
        href: '/terms-of-use',
      },
      {
        label: 'Privacy Policy',
        href: '/privacy-policy',
      },
      {
        label: 'Cookies',
        href: '/',
      },
    ],
  },
  {
    title: 'Community',
    links: [
      {
        label: 'FAQ',
        href: '#faq',
      },
    ],
  },
];

function Footer() {
  return (
    <Container as='footer' className='mt-36 pb-20'>
      <div className='mb-5 flex items-center justify-between gap-y-7 max-lg:flex-col max-lg:items-start'>
        <div className='space-y-4'>
          <Logo />

          <div className='flex items-center gap-7 max-sm:flex-col max-sm:items-start'>
            {INFO.map(({ icon, label }) => (
              <div className='flex items-center gap-3'>
                <Image
                  alt={icon}
                  height={20}
                  src={`/icons/${icon}`}
                  width={20}
                />

                <p>{label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='space-y-2'>
          <p>Subscribe to our newsletter</p>

          <div className=''>
            <InputBox
              className='w-[300px] !rounded-[100px] border border-solid border-[#292929] !bg-[#1e1e1e] md:w-[450px] lg:w-[300px]'
              inputClassName='!rounded-[100px] placeholder:text-[#666D80] text-dark-900'
              placeholder='Your Email'
              renderInner={() => (
                <Button
                  className='absolute right-1 top-[2px] h-[90%] items-center justify-center px-5 font-medium'
                  variant='primary'
                >
                  Subscribe
                </Button>
              )}
              type='text'
              value=''
            />
          </div>
        </div>
      </div>

      <hr className='my-8 border-t-2 border-solid border-[#292929]' />

      <div>
        <div className='flex justify-between gap-y-8 max-sm:flex-col'>
          <div className='mt-5'>
            <div className=' flex gap-3 pb-5'>
              {socials.map(({ href, icon }) => (
                <Link href={href} target='_blank'>
                  <button
                    className='grid size-12 place-items-center rounded-[16px] border-[1.5px] border-solid border-blue-500 text-white transition-all hover:bg-blue-500'
                    type='button'
                  >
                    <span className='text-[25px]'>{icon}</span>
                  </button>
                </Link>
              ))}
            </div>
            <p>
              Copyright © {new Date().getFullYear()} All Rights
              Reserved
            </p>
          </div>

          <ul className='flex flex-wrap gap-x-20 gap-y-7'>
            {FooterNav.map(({ links, title }) => (
              <li key={title}>
                <h3 className='mb-3 font-semibold text-white md:text-lg'>
                  {title}
                </h3>

                <ul>
                  {links.map(({ href, label }) => (
                    <li className='mb-2 transition-all duration-300 hover:text-blue-500'>
                      <Link href={href}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}

export default Footer;
