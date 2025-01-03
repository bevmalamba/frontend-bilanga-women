
import { Star } from 'lucide-react';

interface FrequencyItemProps {
  name: string;
  price: number;
  rating: number;
  image: string;
}

export default function FrequencyItem({ name, price, rating, image }: FrequencyItemProps) {
  return (
    <div className="flex items-center gap-3 py-2">
      <img 
        src={image} 
        alt={name} 
        className="w-16 h-16 object-cover rounded-lg"
      />
      <div className="flex-1">
        <h4 className="text-sm font-medium text-gray-700 mb-1">{name}</h4>
        <div className="flex items-center gap-2">
          <span className="text-green-600 font-semibold">${price.toFixed(2)}</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                className={`${
                  i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}