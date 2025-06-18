import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Link to={`/product/${product.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
        <div className="aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-semibold text-lg line-clamp-1">{product.name}</h3>
            {product.rating && (
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm text-gray-600">{product.rating}</span>
              </div>
            )}
          </div>

          <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>

          {/* <div className="flex items-center gap-2 mb-3">
            <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
              {product.brand}
            </span>
            <span className="border border-gray-300 text-gray-600 text-xs px-2 py-1 rounded capitalize">
              {product.category}
            </span>
          </div> */}


          <img
            src={`/images/products/${product.imageUrl}`}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />


          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-xl font-bold text-blue-600">
                £{product.price.toFixed(2)}
              </span>
              {product.originalPrice && product.originalPrice > product.price && (
                <span className="text-sm text-gray-500 line-through">
                  £{product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded text-sm flex items-center gap-1 disabled:bg-gray-300"
            >
              <ShoppingCart className="h-4 w-4" />
              Add to Cart
            </button>
          </div>

          {!product.inStock && (
            <div className="mt-2">
              <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                Out of Stock
              </span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;




