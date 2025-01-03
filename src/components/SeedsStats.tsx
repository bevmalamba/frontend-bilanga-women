
import { Leaf, Sprout, Sun, Droplets } from 'lucide-react';

const stats = [
  {
    label: "Production Bio",
    value: "95%",
    icon: <Leaf className="w-6 h-6 text-green-500" />,
    description: "De nos semences sont certifiées biologiques"
  },
  {
    label: "Taux Natural",
    value: "100%",
    icon: <Sprout className="w-6 h-6 text-green-500" />,
    description: "Sans OGM ni pesticides chimiques"
  },
  {
    label: "Rendement",
    value: "85%",
    icon: <Sun className="w-6 h-6 text-green-500" />,
    description: "Taux de germination garanti"
  },
  {
    label: "Résistance",
    value: "90%",
    icon: <Droplets className="w-6 h-6 text-green-500" />,
    description: "Adaptées aux conditions locales"
  }
];

export default function SeedsStats() {
  return (
    <section className="py-20 bg-gray-100" id="seeds-stats">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">NOS SEMENCES</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="flex items-center justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-center">
                <span className="block text-4xl font-bold text-green-600 mb-2">
                  {stat.value}
                </span>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-600">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16  p-8 rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Qualité Garantie</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Sprout className="text-green-500" />
                  <span>Semences testées en laboratoire</span>
                </li>
                <li className="flex items-center gap-2">
                  <Sprout className="text-green-500" />
                  <span>Certification biologique</span>
                </li>
                <li className="flex items-center gap-2">
                  <Sprout className="text-green-500" />
                  <span>Traçabilité complète</span>
                </li>
                <li className="flex items-center gap-2">
                  <Sprout className="text-green-500" />
                  <span>Conservation optimale</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Support Technique</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Sprout className="text-green-500" />
                  <span>Conseils personnalisés</span>
                </li>
                <li className="flex items-center gap-2">
                  <Sprout className="text-green-500" />
                  <span>Suivi de culture</span>
                </li>
                <li className="flex items-center gap-2">
                  <Sprout className="text-green-500" />
                  <span>Formation technique</span>
                </li>
                <li className="flex items-center gap-2">
                  <Sprout className="text-green-500" />
                  <span>Documentation complète</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}