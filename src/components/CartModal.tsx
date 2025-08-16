import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();

  console.log('CartModal rendered, items:', cartItems.length);

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.error('El carrito está vacío');
      return;
    }
    
    toast.success('¡Gracias por tu compra! Procesando pedido...');
    clearCart();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800">Carrito de Compras</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto max-h-96">
          {cartItems.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-gray-500 text-lg">Tu carrito está vacío</p>
              <p className="text-gray-400 mt-2">¡Agrega algunos productos para comenzar!</p>
            </div>
          ) : (
            <div className="p-6 space-y-4">
              {cartItems.map((item, index) => (
                <div key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}-${index}`} 
                     className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{item.product.name}</h3>
                    <p className="text-sm text-gray-600">
                      Talla: {item.selectedSize} | Color: {item.selectedColor}
                    </p>
                    <p className="text-lg font-bold text-green-600">${item.product.price}</p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.selectedSize, item.selectedColor, item.quantity - 1)}
                      className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                    >
                      <Minus size={16} />
                    </button>
                    
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    
                    <button
                      onClick={() => updateQuantity(item.product.id, item.selectedSize, item.selectedColor, item.quantity + 1)}
                      className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.product.id, item.selectedSize, item.selectedColor)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xl font-bold text-gray-800">Total:</span>
              <span className="text-2xl font-bold text-green-600">
                ${getTotalPrice().toFixed(2)}
              </span>
            </div>
            
            <div className="flex space-x-4">
              <button
                onClick={clearCart}
                className="flex-1 py-3 px-4 bg-gray-200 text-gray-800 rounded-md font-medium hover:bg-gray-300 transition-colors"
              >
                Vaciar Carrito
              </button>
              
              <button
                onClick={handleCheckout}
                className="flex-1 py-3 px-4 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
              >
                Proceder al Pago
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};