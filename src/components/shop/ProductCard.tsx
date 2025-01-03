
import { Star } from 'lucide-react';

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  isHot?: boolean;
  isSale?: boolean;
  rating?: number;
}

export default function ProductCard({ name, price, image, isHot, isSale, rating }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-64 object-cover rounded-t-lg" />
        {isHot && (
          <span className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 text-xs rounded">
            HOT
          </span>
        )}
        {isSale && (
          <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
            SALE
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-gray-700 font-medium mb-2">{name}</h3>
        <div className="flex justify-between items-center">
          <span className="text-green-600 font-bold">${price.toFixed(2)}</span>
          {rating && (
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}