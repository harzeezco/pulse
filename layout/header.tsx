'use client';

import * as React from 'react';
import { Button } from '@/components/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/drawer';
import Logo from '@/components/logo';
import { cn } from '@/utils/cn';
import { AlignRight, Minus, Plus } from 'lucide-react';
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
  const [goal, setGoal] = React.useState(350);

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent>
        <div className='mx-auto w-full max-w-sm'>
          <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>
              Set your daily activity goal.
            </DrawerDescription>
          </DrawerHeader>
          <div className='p-4 pb-0'>
            <div className='flex items-center justify-center space-x-2'>
              <Button
                className='size-8 shrink-0 rounded-full'
                disabled={goal <= 200}
                variant='outline'
                onClick={() => onClick(-10)}
              >
                <Minus className='size-4' />
                <span className='sr-only'>Decrease</span>
              </Button>
              <div className='flex-1 text-center'>
                <div className='text-7xl font-bold tracking-tighter'>
                  {goal}
                </div>
                <div className='text-[0.70rem] uppercase'>
                  Calories/day
                </div>
              </div>
              <Button
                className='size-8 shrink-0 rounded-full'
                disabled={goal >= 400}
                variant='outline'
                onClick={() => onClick(10)}
              >
                <Plus className='size-4' />
                <span className='sr-only'>Increase</span>
              </Button>
            </div>
          </div>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant='outline'>Cancel</Button>
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
