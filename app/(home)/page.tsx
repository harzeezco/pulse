import FirstFeature from '@/pages/home-page/first-feature';
import Hero from '@/pages/home-page/hero';
import SecondFeature from '@/pages/home-page/second-feature';
import TrustedCompanies from '@/pages/home-page/trusted-companies';

function HomePage() {
  return (
    <>
      <Hero />
      <TrustedCompanies />
      <FirstFeature />
      <SecondFeature />
    </>
  );
}

export default HomePage;
