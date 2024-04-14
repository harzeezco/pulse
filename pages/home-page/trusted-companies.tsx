import { Container } from '@/layout';
import Image from 'next/image';

type CompanyProps = {
  icon: string;
  name: string;
};

const COMPANIES: CompanyProps[] = [
  {
    icon: 'icon-avon.svg',
    name: 'Avon',
  },
  {
    icon: 'icon-zomato.svg',
    name: 'Romato',
  },
  {
    icon: 'icon-mware.svg',
    name: 'VmWare',
  },
  {
    icon: 'icon-dynamo.svg',
    name: 'Dynamo Book',
  },
  {
    icon: 'icon-firestore.svg',
    name: 'Firestore',
  },
];

function TrustedCompanies() {
  return (
    <Container as='section' className='py-14 text-center'>
      <h1 className='text-xl font-medium md:text-2xl'>
        The world&apos;s best companies trust Us.
      </h1>

      <ul className='mt-6 flex shrink flex-wrap items-center justify-center gap-7 lg:justify-between'>
        {COMPANIES.map(({ icon, name }) => (
          <li key={name}>
            <Image
              alt={name}
              height={50}
              src={`/icons/${icon}`}
              width={100}
            />
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default TrustedCompanies;
