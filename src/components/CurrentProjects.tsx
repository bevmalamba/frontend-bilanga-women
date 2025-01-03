
import { Calendar, Users, Target } from 'lucide-react';

const projects = [
  {
    title: "Ferme Biologique Modèle",
    description: "Création d'une ferme modèle utilisant des techniques agricoles innovantes et durables.",
    status: "En cours",
    completion: "75%",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=500&q=80"
  },
  {
    title: "Formation Agriculteurs",
    description: "Programme de formation pour 200 agriculteurs locaux sur les pratiques agricoles modernes.",
    status: "En cours",
    completion: "50%",
    image: "https://images.unsplash.com/photo-1529313780224-1a12b68bed16?auto=format&fit=crop&w=500&q=80"
  },
  {
    title: "Projet Irrigation Durable",
    description: "Installation de systèmes d'irrigation économes en eau pour les petits exploitants.",
    status: "En cours",
    completion: "30%",
    image: "https://images.unsplash.com/photo-1463123081488-789f998ac9c4?auto=format&fit=crop&w=500&q=80"
  }
];

export default function CurrentProjects() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">PROJETS EN COURS DE RÉALISATION</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                  {project.status}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Progression: {project.completion}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}