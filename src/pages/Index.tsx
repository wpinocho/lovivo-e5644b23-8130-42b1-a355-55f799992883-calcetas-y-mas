import React from 'react';
import { CartProvider } from '../context/CartContext';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { CategorySection } from '../components/CategorySection';
import { ProductGrid } from '../components/ProductGrid';
import { Footer } from '../components/Footer';

const Index = () => {
  console.log('Index page rendered');

  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <HeroSection />
          <CategorySection />
          <ProductGrid />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Index;