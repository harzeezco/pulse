import Blog from '@/pages/home-page/blog';
import Faq from '@/pages/home-page/faq';
import FirstFeature from '@/pages/home-page/first-feature';
import Hero from '@/pages/home-page/hero';
import Pricing from '@/pages/home-page/pricing';
import SecondFeature from '@/pages/home-page/second-feature';
import ThirdFeature from '@/pages/home-page/third-feature';
import TrustedCompanies from '@/pages/home-page/trusted-companies';

function HomePage() {
  return (
    <>
      <Hero />
      <TrustedCompanies />
      <FirstFeature />
      <SecondFeature />
      <ThirdFeature />
      <Pricing />
      <Faq />
      <Blog />
    </>
  );
}

export default HomePage;
