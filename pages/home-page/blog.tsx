import { BlogDetails } from '@/components/blog-details';
import { Button } from '@/components/button';
import { Container } from '@/layout';

export type BlogProps = {
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

function Blog() {
  return (
    <Container as='section' className='mt-16'>
      <div className='flex items-center justify-between gap-y-3 max-md:flex-col max-sm:items-start'>
        <h1 className='text-center text-4xl font-medium'>
          Blog & Articles
        </h1>

        <Button variant='dark'>See All</Button>
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
