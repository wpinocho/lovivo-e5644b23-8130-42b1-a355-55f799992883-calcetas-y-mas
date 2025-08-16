export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  sizes: string[];
  colors: string[];
  category: string;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}