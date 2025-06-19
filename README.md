# TechHut - Modern E-commerce Platform

A modern, responsive e-commerce website for electronics built with React, TypeScript, and Express.js. Features a clean design with product browsing, cart management, and seamless shopping experience.

## 🚀 Features

- **Modern UI/UX**: Clean, responsive design with Tailwind CSS and shadcn/ui components
- **Product Catalog**: Browse smartphones, laptops, and accessories with detailed product pages
- **Shopping Cart**: Add, remove, and manage items with real-time updates
- **Category Navigation**: Organized product categories with filtering
- **Image Gallery**: High-quality product images with zoom and gallery views
- **Mobile-First**: Fully responsive design for all device sizes
- **Real-time Updates**: Dynamic cart count and pricing with instant feedback

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **shadcn/ui** component library
- **Wouter** for client-side routing
- **TanStack Query** for server state management
- **Framer Motion** for animations
- **Lucide React** for icons

### Backend
- **Express.js** with TypeScript
- **Drizzle ORM** for database operations
- **PostgreSQL** database
- **Express Sessions** for cart persistence

### Development Tools
- **Vite** for fast development and building
- **ESBuild** for production bundling
- **TypeScript** for type safety
- **Node.js 20** runtime

## 📁 Project Structure

```
techhut/
├── public/
│   └── images/
│       ├── products/      # Product images
│       └── categories/    # Category images
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/            # Route components
│   ├── context/          # React Context providers
│   ├── hooks/            # Custom React hooks
│   └── lib/              # Utility functions
├── server/
│   ├── index.ts           # Express server setup
│   ├── routes.ts          # API route definitions
│   └── storage.ts         # Data access layer
└── shared/
    └── schema.ts          # Shared type definitions
```

## 🚦 Getting Started

### Prerequisites
- Node.js 20 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url
   cd techhut
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env file with:
   DATABASE_URL=your_database_connection_string
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Visit `http://localhost:5000`
   - The app runs on port 5000 (both frontend and backend)

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run type-check` - Run TypeScript type checking

## 🛍️ Product Catalog

### Categories
- **Smartphones**: iPhone, Samsung Galaxy, Google Pixel
- **Laptops**: MacBook, Gaming laptops, Business laptops  
- **Accessories**: AirPods, Chargers, Cases

### Featured Products
- iPhone 15 Pro Max - £1,199
- MacBook Pro M3 - £1,999
- Galaxy S24 Ultra - £1,299
- AirPods Pro 2 - £249
- Gaming Laptop RTX 4080 - £2,499
- Wireless Charging Stand - £79

## 🔧 Configuration

### Image Setup
Images are served from the Express server at `http://localhost:5000/images/`:
- Product images: `public/images/products/`
- Category images: `public/images/categories/`

### Database Schema
- **Products**: Name, description, price, brand, category, images
- **Cart Items**: Product references, quantities, session management
- **Users**: Authentication and user management

## 📱 Responsive Design

- **Mobile**: Optimized for phones (320px+)
- **Tablet**: Enhanced layout for tablets (768px+)
- **Desktop**: Full-featured experience (1024px+)
- **Large Screens**: Centered content with max-width constraints

## 🔐 Security Features

- Session-based cart management
- Input validation with Zod schemas
- Error boundaries and fallback handling
- Secure static file serving

## 🚀 Deployment

### Production Build
```bash
npm run build
```

### Environment Variables
- `DATABASE_URL` - PostgreSQL connection string
- `NODE_ENV` - Set to 'production' for production builds

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Images provided by Unsplash
- UI components from shadcn/ui
- Icons from Lucide React
- Built with modern web technologies

---

**TechHut** - Your destination for the latest tech products 🛒✨
