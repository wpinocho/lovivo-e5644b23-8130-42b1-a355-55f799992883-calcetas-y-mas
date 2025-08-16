import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CartItem, Product } from '../types/product';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, size: string, color: string, quantity: number) => void;
  removeFromCart: (productId: string, size: string, color: string) => void;
  updateQuantity: (productId: string, size: string, color: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product, size: string, color: string, quantity: number) => {
    console.log('Adding to cart:', { product: product.name, size, color, quantity });
    
    setCartItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(
        item => item.product.id === product.id && 
                item.selectedSize === size && 
                item.selectedColor === color
      );

      if (existingItemIndex > -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += quantity;
        return updatedItems;
      } else {
        return [...prevItems, { product, quantity, selectedSize: size, selectedColor: color }];
      }
    });
  };

  const removeFromCart = (productId: string, size: string, color: string) => {
    console.log('Removing from cart:', { productId, size, color });
    setCartItems(prevItems => 
      prevItems.filter(item => 
        !(item.product.id === productId && 
          item.selectedSize === size && 
          item.selectedColor === color)
      )
    );
  };

  const updateQuantity = (productId: string, size: string, color: string, quantity: number) => {
    console.log('Updating quantity:', { productId, size, color, quantity });
    if (quantity <= 0) {
      removeFromCart(productId, size, color);
      return;
    }

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.product.id === productId && 
        item.selectedSize === size && 
        item.selectedColor === color
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    console.log('Clearing cart');
    setCartItems([]);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};