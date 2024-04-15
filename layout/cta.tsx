import { Button } from '@/components/button';
import { Container } from '@/layout';
import Image from 'next/image';

function CTA() {
  return (
    <section className='relative my-20'>
      <Container>
        <div
          className='flex items-center justify-between gap-y-6 rounded-b-2xl p-16 max-sm:flex-col'
          style={{
            backgroundImage: 'url(/images/cta-banner.png)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '100%',
            maxWidth: '1100px',
            width: '100%',
          }}
        >
          <h1 className='max-w-sm bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-2xl font-medium text-transparent'>
            Start your free trials and improve your users’ experience
          </h1>

          <Button variant='dark'>Get started</Button>
        </div>
      </Container>

      <div className='absolute inset-x-0 -bottom-16 -z-10 w-full'>
        <Image
          alt='grid'
          className='w-full opacity-45 max-sm:h-[270px] sm:h-[430px] lg:h-auto'
          height={610}
          src='/images/cta-grid.png'
          width={1200}
        />
      </div>
    </section>
  );
}

export default CTA;
