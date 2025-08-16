import React from 'react';

const categories = [
  {
    name: 'Deportivas',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop',
    description: 'Para tus entrenamientos'
  },
  {
    name: 'Clásicas',
    image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=300&h=200&fit=crop',
    description: 'Elegancia diaria'
  },
  {
    name: 'Premium',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop',
    description: 'Máxima calidad'
  },
  {
    name: 'Divertidas',
    image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=300&h=200&fit=crop',
    description: 'Expresa tu personalidad'
  }
];

export const CategorySection: React.FC = () => {
  console.log('CategorySection rendered');

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Nuestras Categorías</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Encuentra el par perfecto para cada momento de tu día
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category.name} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <div className="aspect-video overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{category.name}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};