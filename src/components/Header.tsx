import React from 'react';
import { ShoppingCart, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CartModal } from './CartModal';
import { useState } from 'react';

export const Header: React.FC = () => {
  const { getTotalItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  console.log('Header rendered, total items:', getTotalItems());

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-800">SockShop</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Inicio</a>
              <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Productos</a>
              <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Categorías</a>
              <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Contacto</a>
            </nav>

            {/* Cart and Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Cart Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                <ShoppingCart size={24} />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t pt-4">
              <div className="flex flex-col space-y-2">
                <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors py-2">Inicio</a>
                <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors py-2">Productos</a>
                <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors py-2">Categorías</a>
                <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors py-2">Contacto</a>
              </div>
            </nav>
          )}
        </div>
      </header>

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};