export interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    imageUrl: string;
    rating?: number;
    isHot?: boolean;
    isOnSale?: boolean;
    originalPrice?: number;
  }
  
  export interface Category {
    name: string;
    count: number;
    id: string;
  }
  
  export interface SortOption {
    label: string;
    value: string;
  }
  
  export const sortOptions: SortOption[] = [
    { label: 'Popularité', value: 'popularity' },
    { label: 'Prix: bas à haut', value: 'price-asc' },
    { label: 'Prix: haut à bas', value: 'price-desc' },
    { label: 'Alphabétique, A-Z', value: 'alpha-asc' },
    { label: 'Alphabétique, Z-A', value: 'alpha-desc' },
  ];