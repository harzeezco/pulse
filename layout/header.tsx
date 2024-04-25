'use client';

import * as React from 'react';
import { Button } from '@/components/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from '@/components/drawer';
import Logo from '@/components/logo';
import { cn } from '@/utils/cn';
import { AlignRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Container } from './container';

type NavlinkProps = {
  href: string;
  name: string;
};

const NAVLINKS: NavlinkProps[] = [
  {
    name: 'Home',
    href: '/',
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

export function DrawerBar({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <Drawer>
      <DrawerTrigger asChild className='cursor-pointer'>
        {children}
      </DrawerTrigger>
      <DrawerContent>
        <div className='px-6'>
          <div className='flex flex-col gap-4'>
            {NAVLINKS.map(({ href, name }) => {
              const isActive = href === pathname;

              return (
                <div key={name}>
                  <Link key={href} href={href}>
                    <div
                      className={cn(
                        isActive
                          ? 'bg-dark-400 font-semibold'
                          : 'bg-transparent font-medium',
                        'text-lg transition-all p-4 py-3 duration-200 hover:bg-dark-400 active:bg-dark-400 w-full rounded-2xl',
                      )}
                    >
                      {name}
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>

          <DrawerFooter>
            <DrawerClose asChild>
              <Button>Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export function Header() {
  const pathname = usePathname();

  return (
    <section className='max-md:px-4'>
      <Container className='left-1/2 top-3 mt-6 flex items-center justify-between rounded-[100px] bg-light-100 py-3 shadow-header'>
        <Logo />
        <nav className='max-md:hidden'>
          <ul className='relative z-50 flex items-center gap-5 lg:gap-8'>
            {NAVLINKS.map(({ href, name }) => {
              const isActive = pathname === href;

              return (
                <li
                  key={href}
                  className='text-lg font-medium capitalize'
                >
                  <Link
                    key={name}
                    className={cn(
                      'w-full transition-all hover:text-blue-500',
                      isActive ? 'font-semibold text-white' : '',
                    )}
                    href={href}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Button
          className='relative z-50 max-md:hidden'
          type='button'
          variant='primary'
        >
          Get Started
        </Button>

        <div
          className='absolute left-1/2 top-0 max-w-[900px] -translate-x-1/2 max-sm:max-h-[800px]'
          style={{
            backgroundImage: 'url(/images/header-blur.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            width: '100%',
            height: '100%',
          }}
        />

        <div className='relative z-50 pr-3 md:hidden'>
          <DrawerBar>
            <AlignRight size={35} />
          </DrawerBar>
        </div>
      </Container>
    </section>
  );
}
