
const images = [
  "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
  "https://images.unsplash.com/photo-1524247108137-732e0f642303",
  "https://images.unsplash.com/photo-1470058869958-2a77ade41c02",
  "https://images.unsplash.com/photo-1511735111819-9a3f7709049c",
  "https://images.unsplash.com/photo-1490750967868-88aa4486c946",
  "https://images.unsplash.com/photo-1563241527-3004b7be0ffd",
  "https://images.unsplash.com/photo-1466781783364-36c955e42a7f",
  "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e"
];

export default function Gallery() {
  return (
    <section className="py-20 bg-gray-50" id="gallery">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">NOS DIFFÉRENTS PROJETS</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative overflow-hidden group rounded-lg">
              <img
                src={`${image}?auto=format&fit=crop&w=500&q=80`}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}