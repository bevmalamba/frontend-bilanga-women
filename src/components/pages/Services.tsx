

import CEO from '../Ceo';
import SeedsStats from '../SeedsStats';
import Service from '../service/Service';
import ServicesHeader from '../service/ServicesHeader';
import Stats from '../service/Stats';
import Team from '../service/Team';



export default function Services() {
  return (
    <div>
       <ServicesHeader />
      <Service />
      <SeedsStats/>
      <CEO />
    <Stats />
      <Team />
      
    </div>
  );
}