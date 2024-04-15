import Image from 'next/image';
import Link from 'next/link';

function Logo() {
  return (
    <Link className='flex items-center gap-3' href='/'>
      <Image
        alt='logo'
        height={40}
        src='/icons/icon-logo.svg'
        width={40}
      />
      <Image
        alt=''
        height={35}
        src='/images/logo-text.png'
        width={65}
      />
    </Link>
  );
}

export default Logo;
