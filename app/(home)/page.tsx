import Pricing from '@/components/pricing';
import Blog from '@/pages/home-page/blog';
import Faq from '@/pages/home-page/faq';
import FirstFeature from '@/pages/home-page/first-feature';
import Hero from '@/pages/home-page/hero';
import SecondFeature from '@/pages/home-page/second-feature';
import Testimonial from '@/pages/home-page/testimonial';
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
      <Testimonial />
    </>
  );
}

export default HomePage;
