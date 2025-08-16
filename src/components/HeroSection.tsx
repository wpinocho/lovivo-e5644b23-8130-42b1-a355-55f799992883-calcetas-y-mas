import React from 'react';

export const HeroSection: React.FC = () => {
  console.log('HeroSection rendered');

  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Las Mejores Calcetas
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Descubre nuestra colección premium de calcetas para cada ocasión. 
          Comodidad, estilo y calidad en cada paso.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Ver Productos
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
            Ofertas Especiales
          </button>
        </div>
      </div>
    </section>
  );
};