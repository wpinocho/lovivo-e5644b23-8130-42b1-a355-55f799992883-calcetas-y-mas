import React, { useState } from 'react';
import { ProductCard } from './ProductCard';
import { products } from '../data/products';

export const ProductGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  
  console.log('ProductGrid rendered, selected category:', selectedCategory);

  const categories = ['Todos', ...Array.from(new Set(products.map(p => p.category)))];
  
  const filteredProducts = selectedCategory === 'Todos' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Nuestros Productos</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Explora nuestra amplia selección de calcetas de alta calidad
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No se encontraron productos en esta categoría.</p>
          </div>
        )}
      </div>
    </section>
  );
};