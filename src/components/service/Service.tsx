
import { Flower2, Leaf, BookOpen } from 'lucide-react';
import ReactPlayer from 'react-player';


export const service = [
  {
    icon: <Flower2 className="w-12 h-12 text-green-500" />,
    title: "Production agricole",
    description: "Nous produisons des légumes et fruits biologiques de qualité."
  },
  {
    icon: <Leaf className="w-12 h-12 text-green-500" />,
    title: "Consultation agricole",
    description: "Expertise et conseils pour vos projets agricoles."
  },
  {
    icon: <BookOpen className="w-12 h-12 text-green-500" />,
    title: "Formation agricole",
    description: "Programmes de formation pour agriculteurs débutants et expérimentés."
  }
];

export default function Service() {
  return (


    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-row-reverse justify-center items-center gap-20 md:grid-cols-3">
        <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl h-[90%] w-1/2">

            <ReactPlayer url={`https://youtu.be/P96YgZQB5D0?si=Jf_TmWiCtnMnLaMu`} controls width="100%" height="100%"/>
            
            {/* Optional Overlay */}
            <div className="absolute inset-0 bg-black/20 pointer-events-none">
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Découvrez nos services en action</h3>
                <p className="text-sm opacity-90">Une agriculture moderne et durable</p>
              </div>
            </div>
          </div>
          <div id='services' className='flex flex-col gap-10'>
              {service.map((service, index) => (
                
                <div key={index} className="w-auto h-auto text-center p-6 rounded-lg hover:shadow-xl transition-shadow">
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>


  );
}