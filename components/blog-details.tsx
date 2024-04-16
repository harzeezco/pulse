import { BlogProps } from '@/pages/home-page/blog';
import Image from 'next/image';

export function BlogDetails({
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
