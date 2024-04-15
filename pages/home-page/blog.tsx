import { Button } from '@/components/button';
import { Container } from '@/layout';
import Image from 'next/image';

type BlogProps = {
  avatar: string;
  date: string;
  img: string;
  name: string;
  text: string;
  title: string;
};

export const BLOG_DATA: BlogProps[] = [
  {
    img: 'banner.png',
    title: 'Why Pulse is the best Webflow template?',
    text: 'Pulse simplifies project management for efficient collaboration, task planning, deadline setting, and progress tracking.',
    avatar: 'avatar.png',
    name: 'Moinul Hasan',
    date: 'Sept 27, 2023',
  },
  {
    img: 'banner.png',
    title: 'Why Pulse is the best Webflow template?',
    text: 'Pulse simplifies project management for efficient collaboration, task planning, deadline setting, and progress tracking.',
    avatar: 'avatar.png',
    name: 'Ksenia Sverku',
    date: 'Sept 27, 2023',
  },
  {
    img: 'banner.png',
    title: 'Why Pulse is the best Webflow template?',
    text: 'Pulse simplifies project management for efficient collaboration, task planning, deadline setting, and progress tracking.',
    avatar: 'avatar.png',
    name: 'Ksenia Sverku',
    date: 'Sept 27, 2023',
  },
];

function BlogDetails({
  avatar,
  date,
  img,
  name,
  text,
  title,
}: BlogProps) {
  return (
    <li>
      <article className='grid gap-4 rounded-[22px] border border-solid border-[#292929] bg-[#1e1e1e] transition-all duration-300 hover:text-white'>
        <Image
          alt=''
          className='w-full'
          height={370}
          src={`/images/${img}`}
          width={360}
        />
        <div className='space-y-3 px-4 pb-4'>
          <button type='button'>
            <h3 className='text-left text-xl font-semibold'>
              {title}
            </h3>
          </button>
          <p className='mb-4 text-left text-sm'>{text}</p>
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
              <span className='text-[12px]'>{date}</span>
            </div>
          </div>
        </div>
      </article>
    </li>
  );
}

function Blog() {
  return (
    <Container as='section' className='mt-16'>
      <div className='flex items-center justify-between gap-y-3 max-md:flex-col max-sm:items-start'>
        <h1 className='text-center text-4xl font-medium'>
          Blog & Articles
        </h1>

        <Button variant='dark'>See All Posts</Button>
      </div>
      <ul className='mt-7 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
        {BLOG_DATA.map((details) => (
          <BlogDetails key={details.name} {...details} />
        ))}
      </ul>
    </Container>
  );
}

export default Blog;
