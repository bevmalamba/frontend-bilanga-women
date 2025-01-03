
import { Calendar, Users, DollarSign, Sprout } from 'lucide-react';

const stats = [
  {
    value: "20+",
    label: "ANNÉES D'EXPÉRIENCE",
    icon: <Calendar className="w-8 h-8 text-green-500" />
  },
  {
    value: "70",
    label: "PROJETS",
    icon: <Sprout className="w-8 h-8 text-green-500" />
  },
  {
    value: "30+",
    label: "CLIENTS SATISFAITS",
    icon: <Users className="w-8 h-8 text-green-500" />
  },
  {
    value: "80K+",
    label: "REVENUS",
    icon: <DollarSign className="w-8 h-8 text-green-500" />
  }
];

export default function Stats() {
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}