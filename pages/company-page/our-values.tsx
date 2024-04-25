'use client';

import * as React from 'react';
import { Container } from '@/layout';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const FEATURES = [
  {
    icon: 'icon-check1.svg',
    title: 'Streamlined project management',
    desc: 'Pulse simplifies project management for efficient collaboration, task planning, deadline setting, and progress tracking.',
  },
  {
    icon: 'icon-check2.svg',
    title: 'Live data analysis',
    desc: 'Pulse provides real-time data analytics for monitoring performance, trend identification, and informed decision-making.',
  },
  {
    icon: 'icon-check3.svg',
    title: 'Process automation',
    desc: 'Pulse simplifies project management for efficient collaboration, task planning, deadline setting, and progress tracking.',
  },
];

const containerVariants = {
  hidden: {
    scale: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
  visible: {
    scale: 1,
    transition: {
      type: 'spring',
      mass: 0.4,
      damping: 8,
      staggerChildren: 0.4,
      when: 'beforeChildren',
    },
  },
};

const childVariants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      type: 'tween',
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

function OurValues() {
  const container = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(container, { once: true });

  return (
    <Container as='section' className='mt-16'>
      <h1 className='bg-gradient-to-t from-neutral-500 to-white bg-clip-text text-center text-xl font-medium text-transparent lg:text-4xl'>
        The values that drive us
      </h1>

      <div ref={container}>
        {isInView && (
          <motion.div
            animate='visible'
            className='mx-auto mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'
            exit='exit'
            initial='hidden'
            variants={containerVariants}
          >
            {FEATURES.map(({ desc, icon, title }, idx) => (
              <motion.div
                key={idx}
                className='group relative grid rounded-[22px] border border-solid border-[#292929] bg-[#1e1e1e] p-6 transition-all duration-300 hover:bg-blue-500/20 hover:text-white'
                variants={childVariants}
              >
                <Image
                  alt='icon'
                  height={30}
                  src={`/icons/${icon}`}
                  width={30}
                />
                <h2 className='mt-4 bg-gradient-to-b from-neutral-100 to-white bg-clip-text text-2xl group-hover:text-white'>
                  {title}
                </h2>
                <p className='max-w-[300px]'>{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </Container>
  );
}

export default OurValues;
