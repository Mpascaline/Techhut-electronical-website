// import React, { useState, useMemo } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import ProductCard from '../components/ProductCard';
// import productsData from '../data/products.json';

// const Products = () => {
//   const [searchParams] = useSearchParams();
//   const [filters, setFilters] = useState({
//     category: [],
//     priceRange: '',
//     brand: [],
//   });
//   const [sortBy, setSortBy] = useState('featured');
//   const [showFilters, setShowFilters] = useState(false);

//   const categoryFromUrl = searchParams.get('category');

//   const filteredProducts = useMemo(() => {
//     let filtered = [...productsData];

//     // Apply URL category filter
//     if (categoryFromUrl) {
//       filtered = filtered.filter(product => product.category === categoryFromUrl);
//     }

//     // Apply local category filter
//     if (filters.category.length > 0) {
//       filtered = filtered.filter(product => filters.category.includes(product.category));
//     }

//     // Apply price range filter
//     if (filters.priceRange) {
//       filtered = filtered.filter(product => {
//         const price = product.price;
//         switch (filters.priceRange) {
//           case 'under-100':
//             return price < 100;
//           case '100-500':
//             return price >= 100 && price <= 500;
//           case '500-1000':
//             return price >= 500 && price <= 1000;
//           case 'over-1000':
//             return price > 1000;
//           default:
//             return true;
//         }
//       });
//     }

//     // Apply brand filter
//     if (filters.brand.length > 0) {
//       filtered = filtered.filter(product => filters.brand.includes(product.brand));
//     }

//     // Apply sorting
//     switch (sortBy) {
//       case 'price-low':
//         filtered.sort((a, b) => a.price - b.price);
//         break;
//       case 'price-high':
//         filtered.sort((a, b) => b.price - a.price);
//         break;
//       case 'newest':
//         filtered.sort((a, b) => b.id - a.id);
//         break;
//       default:
//         break;
//     }

//     return filtered;
//   }, [categoryFromUrl, filters, sortBy]);

//   const handleCategoryFilter = (category, checked) => {
//     setFilters(prev => ({
//       ...prev,
//       category: checked
//         ? [...prev.category, category]
//         : prev.category.filter(c => c !== category)
//     }));
//   };

//   const handleBrandFilter = (brand, checked) => {
//     setFilters(prev => ({
//       ...prev,
//       brand: checked
//         ? [...prev.brand, brand]
//         : prev.brand.filter(b => b !== brand)
//     }));
//   };

//   const categories = ['smartphones', 'laptops', 'accessories'];
//   const brands = ['Apple', 'Samsung', 'Google', 'ASUS', 'Belkin'];

//   return (
//     <div className="min-h-screen py-8 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Filters Sidebar */}
//           <aside className={`lg:w-1/4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
//             <div className="bg-white rounded-lg shadow-md p-6">
//               <div className="flex items-center justify-between lg:justify-start mb-4">
//                 <h3 className="text-lg font-semibold">Filters</h3>
//                 <button
//                   className="lg:hidden text-gray-500 hover:text-gray-700"
//                   onClick={() => setShowFilters(false)}
//                 >
//                   ×
//                 </button>
//               </div>
              
//               {/* Category Filter */}
//               <div className="mb-6">
//                 <h4 className="font-medium mb-2">Category</h4>
//                 <div className="space-y-2">
//                   {categories.map(category => (
//                     <label key={category} className="flex items-center space-x-2">
//                       <input
//                         type="checkbox"
//                         checked={filters.category.includes(category)}
//                         onChange={(e) => handleCategoryFilter(category, e.target.checked)}
//                         className="rounded border-gray-300"
//                       />
//                       <span className="text-sm capitalize">{category}</span>
//                     </label>
//                   ))}
//                 </div>
//               </div>
              
//               {/* Price Range */}
//               <div className="mb-6">
//                 <h4 className="font-medium mb-2">Price Range</h4>
//                 <div className="space-y-2">
//                   {[
//                     { value: 'under-100', label: 'Under £100' },
//                     { value: '100-500', label: '£100 - £500' },
//                     { value: '500-1000', label: '£500 - £1000' },
//                     { value: 'over-1000', label: 'Over £1000' }
//                   ].map(range => (
//                     <label key={range.value} className="flex items-center space-x-2">
//                       <input
//                         type="radio"
//                         name="priceRange"
//                         value={range.value}
//                         checked={filters.priceRange === range.value}
//                         onChange={(e) => setFilters(prev => ({ ...prev, priceRange: e.target.value }))}
//                         className="border-gray-300"
//                       />
//                       <span className="text-sm">{range.label}</span>
//                     </label>
//                   ))}
//                 </div>
//               </div>
              
//               {/* Brand Filter */}
//               <div>
//                 <h4 className="font-medium mb-2">Brand</h4>
//                 <div className="space-y-2">
//                   {brands.map(brand => (
//                     <label key={brand} className="flex items-center space-x-2">
//                       <input
//                         type="checkbox"
//                         checked={filters.brand.includes(brand)}
//                         onChange={(e) => handleBrandFilter(brand, e.target.checked)}
//                         className="rounded border-gray-300"
//                       />
//                       <span className="text-sm">{brand}</span>
//                     </label>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </aside>
          
//           {/* Products Grid */}
//           <main className="lg:w-3/4">
//             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
//               <div className="flex items-center gap-4">
//                 <h2 className="text-2xl font-bold">
//                   {categoryFromUrl ? `${categoryFromUrl.charAt(0).toUpperCase() + categoryFromUrl.slice(1)}` : 'All Products'}
//                 </h2>
//                 <button
//                   className="lg:hidden bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded text-sm"
//                   onClick={() => setShowFilters(!showFilters)}
//                 >
//                   Filters
//                 </button>
//               </div>
              
//               <div className="flex items-center gap-4 w-full sm:w-auto">
//                 {/* Sort Dropdown */}
//                 <select 
//                   value={sortBy} 
//                   onChange={(e) => setSortBy(e.target.value)}
//                   className="border border-gray-300 rounded px-3 py-2 bg-white"
//                 >
//                   <option value="featured">Sort by: Featured</option>
//                   <option value="price-low">Price: Low to High</option>
//                   <option value="price-high">Price: High to Low</option>
//                   <option value="newest">Newest First</option>
//                 </select>
//               </div>
//             </div>
            
//             {filteredProducts.length === 0 ? (
//               <div className="bg-white rounded-lg shadow-md p-8 text-center">
//                 <p className="text-gray-500 text-lg mb-2">No products found</p>
//                 <p className="text-gray-400">Try adjusting your filters or search terms</p>
//               </div>
//             ) : (
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {filteredProducts.map((product) => (
//                   <ProductCard key={product.id} product={product} />
//                 ))}
//               </div>
//             )}
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products;







import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';

const Products = () => {
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    category: [],
    priceRange: '',
    brand: [],
  });
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const categoryFromUrl = searchParams.get('category');

  const filteredProducts = useMemo(() => {
    let filtered = [...productsData];

    // Apply URL category filter
    if (categoryFromUrl) {
      filtered = filtered.filter(product => product.category === categoryFromUrl);
    }

    // Apply local category filter
    if (filters.category.length > 0) {
      filtered = filtered.filter(product => filters.category.includes(product.category));
    }

    // Apply price range filter
    if (filters.priceRange) {
      filtered = filtered.filter(product => {
        const price = product.price;
        switch (filters.priceRange) {
          case 'under-100':
            return price < 100;
          case '100-500':
            return price >= 100 && price <= 500;
          case '500-1000':
            return price >= 500 && price <= 1000;
          case 'over-1000':
            return price > 1000;
          default:
            return true;
        }
      });
    }

    // Apply brand filter
    if (filters.brand.length > 0) {
      filtered = filtered.filter(product => filters.brand.includes(product.brand));
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }

    return filtered;
  }, [categoryFromUrl, filters, sortBy]);

  const handleCategoryFilter = (category, checked) => {
    setFilters(prev => ({
      ...prev,
      category: checked
        ? [...prev.category, category]
        : prev.category.filter(c => c !== category)
    }));
  };

  const handleBrandFilter = (brand, checked) => {
    setFilters(prev => ({
      ...prev,
      brand: checked
        ? [...prev.brand, brand]
        : prev.brand.filter(b => b !== brand)
    }));
  };

  const categories = ['smartphones', 'laptops', 'accessories'];
  const brands = ['Apple', 'Samsung', 'Google', 'ASUS', 'Belkin'];

  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className={`lg:w-1/4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between lg:justify-start mb-4">
                <h3 className="text-lg font-semibold">Filters</h3>
                <button
                  className="lg:hidden text-gray-500 hover:text-gray-700"
                  onClick={() => setShowFilters(false)}
                >
                  ×
                </button>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-2">Category</h4>
                <div className="space-y-2">
                  {categories.map(category => (
                    <label key={category} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={filters.category.includes(category)}
                        onChange={(e) => handleCategoryFilter(category, e.target.checked)}
                        className="rounded border-gray-300"
                      />
                      <span className="text-sm capitalize">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium mb-2">Price Range</h4>
                <div className="space-y-2">
                  {[
                    { value: 'under-100', label: 'Under £100' },
                    { value: '100-500', label: '£100 - £500' },
                    { value: '500-1000', label: '£500 - £1000' },
                    { value: 'over-1000', label: 'Over £1000' }
                  ].map(range => (
                    <label key={range.value} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="priceRange"
                        value={range.value}
                        checked={filters.priceRange === range.value}
                        onChange={(e) => setFilters(prev => ({ ...prev, priceRange: e.target.value }))}
                        className="border-gray-300"
                      />
                      <span className="text-sm">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Brand Filter */}
              <div>
                <h4 className="font-medium mb-2">Brand</h4>
                <div className="space-y-2">
                  {brands.map(brand => (
                    <label key={brand} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={filters.brand.includes(brand)}
                        onChange={(e) => handleBrandFilter(brand, e.target.checked)}
                        className="rounded border-gray-300"
                      />
                      <span className="text-sm">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <main className="lg:w-3/4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-bold">
                  {categoryFromUrl ? `${categoryFromUrl.charAt(0).toUpperCase() + categoryFromUrl.slice(1)}` : 'All Products'}
                </h2>
                <button
                  className="lg:hidden bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded text-sm"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  Filters
                </button>
              </div>

              {/* Sort Dropdown */}
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded px-3 py-2 bg-white"
                >
                  <option value="featured">Sort by: Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest First</option>
                </select>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <p className="text-gray-500 text-lg mb-2">No products found</p>
                <p className="text-gray-400">Try adjusting your filters or search terms</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;
