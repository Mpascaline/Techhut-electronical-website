import express from 'express';
import { exec } from 'child_process';

const app = express();
const port = 30001;

app.use(express.json());

const products = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    description: "Latest flagship with titanium design and A17 Pro chip",
    price: "1199.00",
    imageUrl: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 2,
    name: "MacBook Pro M3",
    description: "14-inch with M3 chip, 512GB SSD",
    price: "1999.00",
    imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 3,
    name: "Galaxy S24 Ultra",
    description: "200MP camera, S Pen included",
    price: "1299.00",
    imageUrl: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  }
];

let cart = [];

app.get('/api/products', (req, res) => res.json(products));
app.get('/api/cart', (req, res) => res.json(cart));
app.post('/api/cart', (req, res) => {
  const { productId } = req.body;
  cart.push({ id: Date.now(), productId, quantity: 1 });
  res.json({ message: 'Added to cart' });
});

app.get('*', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TechHut - Electronics Store</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50">
    <header class="bg-gray-900 text-white">
        <div class="container mx-auto px-4 py-4">
            <div class="flex justify-between items-center">
                <h1 class="text-2xl font-bold">🛒 TechHut</h1>
                <nav class="space-x-6">
                    <a href="#" class="hover:text-green-400">Home</a>
                    <a href="#" class="hover:text-green-400">Products</a>
                    <a href="#" class="hover:text-green-400">Cart (<span id="cart-count">0</span>)</a>
                </nav>
            </div>
        </div>
    </header>

    <section class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-5xl font-bold mb-4">Welcome to TechHut</h2>
            <p class="text-xl mb-8">Complete E-commerce Website</p>
            <div class="bg-green-500 text-white px-4 py-2 rounded-lg inline-block">
                ✅ Browser Opens Automatically!
            </div>
        </div>
    </section>

    <section class="py-16">
        <div class="container mx-auto px-4">
            <h2 class="text-4xl font-bold text-center mb-12">Featured Products</h2>
            <div id="products-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            </div>
        </div>
    </section>

    <script>
        fetch('/api/products')
            .then(response => response.json())
            .then(products => {
                const grid = document.getElementById('products-grid');
                grid.innerHTML = products.map(product => \`
                    <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                        <img src="\${product.imageUrl}" alt="\${product.name}" class="w-full h-48 object-cover">
                        <div class="p-6">
                            <h3 class="text-xl font-semibold mb-2">\${product.name}</h3>
                            <p class="text-gray-600 mb-4">\${product.description}</p>
                            <div class="flex justify-between items-center">
                                <span class="text-2xl font-bold text-green-600">$\${product.price}</span>
                                <button onclick="addToCart(\${product.id})" 
                                        class="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                \`).join('');
            });

        function addToCart(productId) {
            fetch('/api/cart', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ productId })
            }).then(() => {
                alert('Product added to cart!');
            });
        }
    </script>
</body>
</html>
  `);
});

app.listen(port, () => {
  console.log('TechHut e-commerce running on http://localhost:' + port);
  exec('start http://localhost:' + port);
});