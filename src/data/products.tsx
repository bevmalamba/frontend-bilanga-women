import { Product, Category } from '../types/product';

export const categories: Category[] = [
  { name: 'Toutes les plantes', count: 72, id: 'all' },
  { name: 'Plantes d\'extérieur', count: 20, id: 'outdoor' },
  { name: 'Plantes d\'intérieur', count: 15, id: 'indoor' },
  { name: 'Plantes de bureau', count: 20, id: 'office' },
  { name: 'Plantes en pot', count: 15, id: 'potted' },
  { name: 'Autres', count: 2, id: 'others' },
];

export const products: Product[] = [
  {
    id: 1,
    name: 'Cactus Flower',
    category: 'indoor',
    price: 10.99,
    imageUrl: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    rating: 5,
    isHot: true
  },
  {
    id: 2,
    name: 'Tulip Flower',
    category: 'outdoor',
    price: 11.99,
    imageUrl: 'https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    rating: 4,
    isOnSale: true,
    originalPrice: 15.99
  },
  // Ajoutez plus de produits selon vos besoins
];