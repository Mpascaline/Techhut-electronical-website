import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const location = useLocation();
  const { cartCount } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-slate-800 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <h1 className="text-2xl font-bold text-white cursor-pointer">TechHut</h1>
            </Link>
          </div>
          
          {/* Navigation Links - Hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/">
              <span className={`hover:text-orange-400 transition-colors font-medium cursor-pointer ${
                location.pathname === '/' ? 'text-orange-400' : ''
              }`}>
                Home
              </span>
            </Link>
            <Link to="/products">
              <span className={`hover:text-orange-400 transition-colors font-medium cursor-pointer ${
                location.pathname === '/products' || location.pathname.startsWith('/product') ? 'text-orange-400' : ''
              }`}>
                Products
              </span>
            </Link>
          </nav>
          
          {/* Right side - Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Cart button */}
            <Link to="/cart">
              <button className="relative text-white hover:text-orange-400 hover:bg-slate-700 p-2 rounded transition-colors">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-400 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
                <span className="ml-2 hidden sm:inline">Cart</span>
              </button>
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white hover:text-orange-400 hover:bg-slate-700 p-2 rounded"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-700">
          <div className="px-4 py-2 space-y-2">
            <Link to="/">
              <span
                className={`block py-2 px-3 rounded hover:bg-slate-600 transition-colors font-medium cursor-pointer ${
                  location.pathname === '/' ? 'text-orange-400 bg-slate-600' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </span>
            </Link>
            <Link to="/products">
              <span
                className={`block py-2 px-3 rounded hover:bg-slate-600 transition-colors font-medium cursor-pointer ${
                  location.pathname === '/products' || location.pathname.startsWith('/product') ? 'text-orange-400 bg-slate-600' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;