import Contact from '../components/Contact';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Services from '../components/Services';
import SimpleHero from '../components/SimpleHero';
import Testimonials from '../components/Testimonials';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Home = () => {
  return (
    <>
      {/* <Hero /> */}
      {/* <About /> */}
      <SimpleHero />
      <Services />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;