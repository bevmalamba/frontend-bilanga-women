

const teamMembers = [
  {
    name: "Jonce Mandeke",
    role: "Ingénieur Agronome",
    image: "https://res.cloudinary.com/dgyhsam48/image/upload/v1735899808/PHOTO-2024-12-23-22-12-03-removebg-preview_lj7bfh.png"
  },
  {
    name: "Ketsia Nsimba",
    role: "Ingénieur Agronome",
    image: "https://res.cloudinary.com/dgyhsam48/image/upload/v1735899633/Capture_d_e%CC%81cran_2025-01-03_a%CC%80_11.19.03_r0qh8z.png"
  },
  {
    name: "Danny Bimpi",
    role: "Ingénieur Agronome et Expert R&D",
    image: "https://res.cloudinary.com/dgyhsam48/image/upload/v1735898953/ba41f65a-20ea-450c-8d23-7d5ef31ac3d0_prnc1a.jpg"
  },
  {
    name: "Bénédicte Mvuzi",
    role: " Ingénieur Agronome et Responsable Marketing",
    image: "https://res.cloudinary.com/dgyhsam48/image/upload/v1735899343/080f8f51-bc5f-431f-9785-7c666a0e7144_xvcrgt.jpg"
  }
];

export default function Team() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">NOTRE ÉQUIPE</h2>
        <p className="text-center text-gray-600 mb-12">Notre équipe est composée des ingénieurs agronomes expérimentés</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="relative h-64">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}