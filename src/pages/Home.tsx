import Contact from '../components/Contact';
import Features from '../components/Features';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <>
      <Hero />
      {/* <About /> */}
      <Services />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;