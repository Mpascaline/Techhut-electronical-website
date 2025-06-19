
import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ShoppingCart, Star, Heart, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import productsData from '../data/products.json';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);

  const product = productsData.find(p => p.id === parseInt(id));

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  // ✅ No need to map paths again – they're already correct in your JSON
  const imageList = product.images && product.images.length > 0
    ? product.images
    : [product.image];

  const images = imageList;

  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <div className="mb-6">
          <Link to="/products">
            <button className="flex items-center text-gray-600 hover:text-gray-800 mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Products
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-white p-4">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square overflow-hidden rounded border-2 ${
                      selectedImage === index ? 'border-blue-500' : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">{product.brand}</span>
                <span className="border border-gray-300 text-gray-600 px-2 py-1 rounded text-sm capitalize">{product.category}</span>
              </div>
            </div>

            {product.rating && (
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-current'
                          : 'stroke-current fill-transparent'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
            )}

            <div className="space-y-2">
              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-bold text-blue-600">
                  £{product.price.toFixed(2)}
                </span>
                {product.originalPrice && product.originalPrice > product.price && (
                  <span className="text-xl text-gray-500 line-through">
                    £{product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
              {product.stockQuantity !== undefined && (
                <p className="text-sm text-gray-600">
                  {product.stockQuantity > 0
                    ? `${product.stockQuantity} in stock`
                    : 'Out of stock'}
                </p>
              )}
            </div>

            <div>
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>

            {product.features && product.features.length > 0 && (
              <div>
                <h3 className="font-semibold mb-2">Key Features</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {product.specifications && (
              <div>
                <h3 className="font-semibold mb-2">Specifications</h3>
                <p className="text-gray-600">{product.specifications}</p>
              </div>
            )}

            <div className="flex space-x-4">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 disabled:bg-gray-300"
              >
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </button>
              <button className="border border-gray-300 hover:bg-gray-50 p-3 rounded-lg">
                <Heart className="h-5 w-5" />
              </button>
            </div>

            {!product.inStock && (
              <div>
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">Out of Stock</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
