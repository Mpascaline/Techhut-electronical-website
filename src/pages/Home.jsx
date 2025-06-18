import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';

const Home = () => {
  // const categories = [
  //   {
  //     name: "Smartphones",
  //     description: "Latest iPhone, Samsung, Google Pixel",
  //     price: "From £299",
  //     image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
  //     href: "/products?category=smartphones"
  //   },
  //   {
  //     name: "Laptops",
  //     description: "MacBook, Dell, HP, Gaming laptops",
  //     price: "From £699",
  //     image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
  //     href: "/products?category=laptops"
  //   },
  //   {
  //     name: "Accessories",
  //     description: "Headphones, Cases, Chargers",
  //     price: "From £19",
  //     image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
  //     href: "/products?category=accessories"
  //   }
  // ];




  const categories = [
  {
    name: "Smartphones",
    description: "Latest iPhone, Samsung, Google Pixel",
    price: "From £299",
    image: "/images/categories/smartphones.jpg",  
    href: "/products?category=smartphones"
  },
  {
    name: "Laptops",
    description: "MacBook, Dell, HP, Gaming laptops",
    price: "From £699",
    image: "/images/categories/laptops.jpg",   
    href: "/products?category=laptops"  
  },
  {
    name: "Accessories",
    description: "Headphones, Cases, Chargers",
    price: "From £19",
    image: "/images/categories/accessories.jpg",  
    href: "/products?category=accessories"
  }
];






  // Get first 6 products as featured
  const featuredProducts = productsData.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900">
              Shop Quality Tech Products
            </h1>
            <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
              Discover premium electronics from trusted brands with unbeatable prices and quality guarantee
            </p>
            <Link to="/products">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-lg rounded">
                Browse Products
              </button>
            </Link>
            <div className="mt-12">
              <img
                src="https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400"
                alt="Modern tech workspace showcasing premium electronics"
                className="rounded-xl shadow-2xl w-full h-auto max-w-4xl mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link key={category.name} to={category.href}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <span className="text-blue-500 font-medium">{category.price}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Why Choose TechHut?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-600">Free shipping on all orders over £50</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-2">Warranty</h3>
              <p className="text-gray-600">1-year warranty on all electronics</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-gray-600">Only authentic, high-quality products</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;