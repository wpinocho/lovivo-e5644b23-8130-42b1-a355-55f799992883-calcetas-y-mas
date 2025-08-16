import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Calcetas Deportivas Premium',
    price: 25.99,
    image: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=400&h=400&fit=crop',
    description: 'Calcetas deportivas de alta calidad con tecnología anti-humedad y soporte para el arco.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Negro', 'Blanco', 'Gris', 'Azul'],
    category: 'Deportivas',
    inStock: true
  },
  {
    id: '2',
    name: 'Calcetas de Algodón Clásicas',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop',
    description: 'Calcetas clásicas de algodón 100% natural, perfectas para el uso diario.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Negro', 'Blanco', 'Gris', 'Marrón'],
    category: 'Clásicas',
    inStock: true
  },
  {
    id: '3',
    name: 'Calcetas de Lana Merino',
    price: 35.99,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
    description: 'Calcetas de lana merino premium, ideales para climas fríos con máxima comodidad.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Gris', 'Marrón', 'Verde', 'Azul marino'],
    category: 'Premium',
    inStock: true
  },
  {
    id: '4',
    name: 'Calcetas Divertidas con Patrones',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&h=400&fit=crop',
    description: 'Calcetas coloridas con patrones únicos para expresar tu personalidad.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Multicolor', 'Rojo', 'Verde', 'Amarillo'],
    category: 'Divertidas',
    inStock: true
  },
  {
    id: '5',
    name: 'Calcetas de Compresión',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
    description: 'Calcetas de compresión graduada para mejorar la circulación y reducir la fatiga.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Negro', 'Azul', 'Gris'],
    category: 'Médicas',
    inStock: true
  },
  {
    id: '6',
    name: 'Calcetas Térmicas de Invierno',
    price: 32.99,
    image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop',
    description: 'Calcetas térmicas con forro polar interno para los días más fríos del año.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Negro', 'Gris oscuro', 'Marrón'],
    category: 'Térmicas',
    inStock: true
  }
];