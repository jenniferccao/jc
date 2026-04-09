import HeroSection from './HeroSection';
import Projects from './Projects';
import Design from './Design';
import Footer from '../../components/Footer';


const Home = () => {
  return (
    <main id="top">
      <HeroSection />
      <Projects />
      <Design />
      <Footer />
    </main>
  );
};

export default Home;
