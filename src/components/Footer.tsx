import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  console.log('Footer rendered');

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">SockShop</h3>
            <p className="text-gray-300 mb-4">
              Tu tienda de confianza para las mejores calcetas. Calidad, comodidad y estilo en cada paso.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Productos</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Categorías</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Ofertas</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Atención al Cliente</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Centro de Ayuda</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Política de Devoluciones</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Envíos</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Tallas</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={16} />
                <span className="text-gray-300">Av. Principal 123, Ciudad</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} />
                <span className="text-gray-300">info@sockshop.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 SockShop. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};