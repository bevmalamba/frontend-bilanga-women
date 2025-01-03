
import FrequencyItem from './FrequencyItem';

const categories = [
  { name: 'All plants', count: 72 },
  { name: 'Outdoor plants', count: 20 },
  { name: 'Indoor plants', count: 15 },
  { name: 'Office Plants', count: 20 },
  { name: 'Potted', count: 15 },
  { name: 'Others', count: 2 },
];

const sortOptions = [
  'New arrivals',
  'Alphabetically, A-Z',
  'Alphabetically, Z-A',
  'Price: low to high',
  'Price: high to low',
];

const frequentItems = [
  {
    name: "Cactus Flower",
    price: 10.99,
    rating: 5,
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Tulip Flower",
    price: 11.99,
    rating: 5,
    image: "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Succulent Plant",
    price: 9.99,
    rating: 4,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=150&q=80"
  }
];

export default function Sidebar() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-lg font-semibold mb-4">PRIX</h2>
        <div className="px-2">
          <input
            type="range"
            min="0"
            max="100"
            className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>$0</span>
            <span>$100</span>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">CATEGORIES</h2>
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li key={index} className="flex items-center justify-between text-gray-600">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="form-checkbox text-green-500 rounded mr-2" />
                <span>{category.name}</span>
              </label>
              <span className="text-sm">({category.count})</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">SORT BY</h2>
        <ul className="space-y-2">
          {sortOptions.map((option, index) => (
            <li key={index}>
              <label className="flex items-center cursor-pointer text-gray-600">
                <input type="radio" name="sort" className="form-radio text-green-500 mr-2" />
                <span>{option}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">FREQUENCE</h2>
        <div className="space-y-4 divide-y divide-gray-100">
          {frequentItems.map((item, index) => (
            <FrequencyItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}