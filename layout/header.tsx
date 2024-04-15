import Logo from '@/components/logo';
import Image from 'next/image';
import Link from 'next/link';

import { Container } from './container';

type NavlinkProps = {
  href: string;
  name: string;
};

const NAVLINKS: NavlinkProps[] = [
  {
    name: 'product',
    href: '/product',
  },
  {
    name: 'company',
    href: '/company',
  },
  {
    name: 'pricing',
    href: '/pricing',
  },
  {
    name: 'contact',
    href: '/contact',
  },
  {
    name: 'blog',
    href: '/blog',
  },
];

export function Header() {
  return (
    <Container
      as='header'
      className='mt-6 flex items-center justify-between rounded-[100px] bg-light-100 py-3 shadow-header'
    >
      <Logo />
      <nav>
        <ul className='relative z-50 flex items-center gap-8'>
          {NAVLINKS.map(({ href, name }) => (
            <li className='text-lg font-medium capitalize'>
              <Link
                key={name}
                className='w-full transition-all hover:text-white'
                href={href}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <button type='button'>Get Started</button>

      <div className='absolute left-1/2 top-0 -translate-x-1/2'>
        <Image
          alt='header-blur'
          height={700}
          src='/images/header-blur.png'
          width={700}
        />
      </div>
    </Container>
  );
}
