import React, { useState } from 'react';
import { Product } from '../types/product';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);

  console.log('ProductCard rendered for:', product.name);

  const handleAddToCart = () => {
    console.log('Adding product to cart:', { 
      product: product.name, 
      size: selectedSize, 
      color: selectedColor, 
      quantity 
    });
    
    addToCart(product, selectedSize, selectedColor, quantity);
    toast.success(`${product.name} agregado al carrito!`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between mb-3">
          <span className="text-2xl font-bold text-green-600">${product.price}</span>
          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {product.category}
          </span>
        </div>

        {/* Size Selection */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700 mb-1">Talla:</label>
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {product.sizes.map((size) => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>

        {/* Color Selection */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700 mb-1">Color:</label>
          <select
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {product.colors.map((color) => (
              <option key={color} value={color}>{color}</option>
            ))}
          </select>
        </div>

        {/* Quantity Selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Cantidad:</label>
          <select
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>

        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className={`w-full py-2 px-4 rounded-md font-medium transition-colors ${
            product.inStock
              ? 'bg-blue-600 hover:bg-blue-700 text-white'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {product.inStock ? 'Agregar al Carrito' : 'Agotado'}
        </button>
      </div>
    </div>
  );
};