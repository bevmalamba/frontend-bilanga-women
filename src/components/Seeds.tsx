
import { Sprout } from 'lucide-react';

const seedTypes = [
  {
    name: "Maïs Bio",
    price: "25.00",
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Tomates Cerises",
    price: "18.50",
    image: "https://images.unsplash.com/photo-1566383444833-43afb88e5dc9?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Haricots Verts",
    price: "15.00",
    image: "https://images.unsplash.com/photo-1567375698348-5d9d5ae99de0?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Légumes Feuilles",
    price: "12.75",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80"
  }
];

export default function Seeds() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">TYPE DE SEMENCES</h2>
          <p className="text-gray-600">Découvrez notre sélection de semences biologiques de haute qualité</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {seedTypes.map((seed, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <img
                  src={seed.image}
                  alt={seed.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">{seed.name}</h3>
                  <Sprout className="text-green-500" />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-green-600 font-bold">{seed.price}€</span>
                  <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm transition-colors">
                    Commander
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}