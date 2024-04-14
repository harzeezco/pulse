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
  {
    icon: 'icon-check4.svg',
    title: 'Strong data security',
    desc: 'Pulse prioritizes data security with advanced encryption, access control, and automatic backups.',
  },
  {
    icon: 'icon-check5.svg',
    title: 'Seamless integration',
    desc: 'Pulse seamlessly integrates with popular third-party tools like Slack, Salesforce, and Google Workspace for a smooth user experience.',
  },
  {
    icon: 'icon-check6.svg',
    title: 'Outstanding customer support',
    desc: 'Our dedicated support team is here via live chat, email, or phone to solve issues and provide answers.',
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

function SecondFeature() {
  const container = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(container, { once: true });

  return (
    <Container as='section' className='mt-16'>
      <div className='mb-5 flex items-center justify-between max-lg:flex-col max-lg:items-start'>
        <h1 className='bg-gradient-to-t from-neutral-500 to-white bg-clip-text text-xl font-medium text-transparent md:text-3xl lg:max-w-xs lg:text-4xl'>
          Features that you&apos;ll ever need.
        </h1>

        <p className='max-w-lg font-medium md:text-lg'>
          Crafted for world-class performance and developed with
          unmatched expertise, Pulse will deliver outstanding results
          every time, without fail.
        </p>
      </div>

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

export default SecondFeature;
