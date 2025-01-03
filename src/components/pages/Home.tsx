import CEO from '../Ceo';
import Contact from '../Contact';
import CurrentProjects from '../CurrentProjects';
import Gallery from '../Gallery';
import Hero from '../Home/Hero';
import Seeds from '../Seeds';
import SeedsStats from '../SeedsStats';
import Service from '../service/Service';

const Home = () => {
  return (
    <main> 
      <Hero />
      <Service />
      <SeedsStats />
      <Gallery />
      <CEO />
      <Seeds />
      <CurrentProjects />
      <Contact />
    </main>
  );
};

export default Home;