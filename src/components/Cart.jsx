import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, clearCart, getCartCount, getCartTotal } = useCart();
  
  const cartCount = getCartCount();
  const cartTotal = getCartTotal();

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ShoppingBag className="mx-auto h-24 w-24 text-gray-400 mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
            <Link to="/products">
              <button className="btn btn-primary">
                Start Shopping
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
          <p className="text-gray-600 mt-2">{cartCount} {cartCount === 1 ? 'item' : 'items'} in your cart</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="card">
                  <div className="card-content">
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        <p className="text-gray-600 text-sm mb-2">{item.brand}</p>
                        <p className="text-blue-600 font-bold">£{item.price.toFixed(2)}</p>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className="btn btn-outline p-2"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        
                        <span className="px-3 py-1 bg-gray-100 rounded text-center min-w-[3rem]">
                          {item.quantity}
                        </span>
                        
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="btn btn-outline p-2"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      
                      <div className="text-right">
                        <p className="font-semibold text-lg">
                          £{(item.price * item.quantity).toFixed(2)}
                        </p>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded transition-colors mt-2"
                        >
                          <Trash2 className="h-4 w-4 mr-1 inline" />
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-between items-center">
              <Link to="/products">
                <button className="btn btn-outline">
                  Continue Shopping
                </button>
              </Link>
              
              <button
                onClick={clearCart}
                className="btn btn-outline text-red-500 hover:text-red-700 border-red-200 hover:border-red-300"
              >
                Clear Cart
              </button>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="card sticky top-24">
              <div className="card-content">
                <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal ({cartCount} items)</span>
                    <span>£{cartTotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="text-green-600">
                      {cartTotal >= 50 ? 'FREE' : '£4.99'}
                    </span>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total</span>
                      <span>£{(cartTotal + (cartTotal >= 50 ? 0 : 4.99)).toFixed(2)}</span>
                    </div>
                  </div>
                  
                  {cartTotal < 50 && (
                    <p className="text-sm text-gray-600">
                      Add £{(50 - cartTotal).toFixed(2)} more for free shipping!
                    </p>
                  )}
                  
                  <button className="btn btn-primary w-full text-lg py-3">
                    Proceed to Checkout
                  </button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    Secure checkout with SSL encryption
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;