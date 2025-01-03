
import ProductCard from './ProductCard';

export const products = [
  {
    name: "Cactus Flower",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=500&q=80",
    isHot: true,
  },
  {
    name: "Tulip Flower",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Succulent Plant",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Bonsai Tree",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Topiary Plant",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1502394202744-021cfbb17454?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Desert Rose",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=500&q=80",
    isSale: true,
  },
  {
    name: "Bonsai Tree",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Topiary Plant",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1502394202744-021cfbb17454?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Desert Rose",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=500&q=80",
    isSale: true,
  },
];

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
}