import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TechHut</h3>
            <p className="text-gray-300 mb-4">
              Your trusted source for the latest electronics and tech accessories.
            </p>
            <div className="flex space-x-4">
              <button className="text-gray-300 hover:text-white p-1">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="text-gray-300 hover:text-white p-1">
                <Twitter className="h-5 w-5" />
              </button>
              <button className="text-gray-300 hover:text-white p-1">
                <Instagram className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/products?category=smartphones">
                  <span className="hover:text-white cursor-pointer">Smartphones</span>
                </Link>
              </li>
              <li>
                <Link to="/products?category=laptops">
                  <span className="hover:text-white cursor-pointer">Laptops</span>
                </Link>
              </li>
              <li>
                <Link to="/products?category=accessories">
                  <span className="hover:text-white cursor-pointer">Accessories</span>
                </Link>
              </li>
              <li>
                <Link to="/products">
                  <span className="hover:text-white cursor-pointer">All Products</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li><span className="hover:text-white cursor-pointer">Contact Us</span></li>
              <li><span className="hover:text-white cursor-pointer">FAQ</span></li>
              <li><span className="hover:text-white cursor-pointer">Shipping Info</span></li>
              <li><span className="hover:text-white cursor-pointer">Returns</span></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4">Get the latest deals and tech news</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded-l px-3 py-2"
              />
              <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-r">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {currentYear} TechHut. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;