import { BlogDetails } from '@/components/blog-details';
import { Container } from '@/layout';
import { BLOG_DATA } from '@/pages/home-page/blog';
import Image from 'next/image';

function BlogPage() {
  return (
    <Container
      as='section'
      className='relative z-50 mt-20 flex flex-col items-center'
    >
      <p className='flex items-center gap-3 text-white'>
        <Image
          alt='logo'
          height={20}
          src='/icons/icon-round.svg'
          width={20}
        />{' '}
        <span className='text-sm font-medium'>Blog & news</span>
      </p>

      <h1 className='mt-5 max-w-2xl text-center text-3xl font-medium md:text-4xl lg:text-5xl'>
        <span className='bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-transparent'>
          Latest news & <span className='text-blue-500'>updates</span>
        </span>{' '}
      </h1>

      <p className='my-4 mb-7 max-w-2xl text-center font-medium md:text-lg'>
        Crafted for world-class performance and developed with
        unmatched expertise, Pulse will deliver outstanding results
        every time, without fail.
      </p>

      <ul>
        {BLOG_POSTS.map(
          ({ author, date, description, img, title }) => (
            <li className='flex max-w-2xl gap-3 rounded-[22px] border border-solid border-[#292929] bg-[#1e1e1e] max-sm:flex-col'>
              <Image
                alt={title}
                className='max-sm:w-full'
                height={200}
                src={`/images/${img}`}
                width={350}
              />
              <div className='p-4'>
                <h2 className='mb-2 max-w-xs text-2xl font-medium text-white'>
                  {title}
                </h2>
                <p>{description}</p>

                <div className='mt-4'>
                  <p className='font-medium'>{author}</p>
                  <span className='text-xs'>{date}</span>
                </div>
              </div>
            </li>
          ),
        )}
      </ul>

      <div className='mt-14'>
        <h3 className='bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-3xl font-medium text-transparent'>
          Latest News
        </h3>
        <ul className='mt-5 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
          {BLOG_DATA.map((details) => (
            <BlogDetails key={details.name} {...details} />
          ))}
        </ul>
      </div>
    </Container>
  );
}

export default BlogPage;

const BLOG_POSTS = [
  {
    img: 'banner.png',
    title: 'Why Pulse is the best Webflow template?',
    description:
      'Pulse simplifies project management for efficient collaboration.',
    author: 'John Doe',
    date: 'Jan 1, 2020',
  },
];
