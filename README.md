# Full Stack E-commerce Application

A modern e-commerce platform built with React, Node.js, MongoDB, and now powered by **Vite** for lightning-fast development!

## 🚀 Features

- **Frontend**: React 18 with Vite for ultra-fast HMR
- **Admin Panel**: Separate admin interface for product management
- **Backend**: Node.js with Express and MongoDB
- **Size Selection**: Interactive size selection with cart integration
- **Authentication**: JWT-based user authentication
- **Image Upload**: Product image management
- **Responsive Design**: Mobile-friendly interface

## 🛠️ Tech Stack

### Frontend & Admin

- **React 18** - UI Framework
- **Vite** - Build tool and dev server (⚡ **NEW!**)
- **React Router** - Client-side routing
- **CSS3** - Styling

### Backend

- **Node.js** - Runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **JWT** - Authentication
- **Multer** - File upload

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Full_Stack_Ecommerce
   ```

2. **Install dependencies for all projects**

   ```bash
   # Backend
   cd backend && npm install

   # Frontend (with Vite)
   cd ../frontend && npm install

   # Admin Panel (with Vite)
   cd ../admin && npm install
   ```

## 🚀 Development

### Quick Start (All servers at once)

```bash
./start-dev.sh
```

### Manual Start

```bash
# Terminal 1 - Backend (Port 4000)
cd backend && npm start

# Terminal 2 - Frontend (Port 3000)
cd frontend && npm run dev

# Terminal 3 - Admin (Port 3001)
cd admin && npm run dev
```

## 📊 Available Scripts

### Frontend (Vite)

- `npm run dev` - Start development server (Port 3000)
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Admin Panel (Vite)

- `npm run dev` - Start development server (Port 3001)
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Backend

- `npm start` - Start server (Port 4000)

## 🌐 Access URLs

- **Frontend**: http://localhost:3000
- **Admin Panel**: http://localhost:3001
- **Backend API**: http://localhost:4000

## 🎯 What's New with Vite?

### ⚡ Performance Improvements

- **Instant Server Start**: Dev server starts in ~100ms vs 10+ seconds with CRA
- **Lightning Fast HMR**: Hot Module Replacement in <50ms
- **Optimized Builds**: Smaller bundle sizes with Rollup

### 🔧 Development Experience

- **Native ES Modules**: No bundling during development
- **Better Error Messages**: Clearer error reporting
- **Built-in TypeScript Support**: Ready for future TypeScript migration

### 📈 Build Performance

- **3-5x faster builds** compared to Create React App
- **Tree-shaking** for smaller production bundles
- **Modern browser targets** by default

## 🎨 Features

### Size Selection

- Interactive size buttons with hover effects
- Visual feedback for selected sizes
- Cart integration with size tracking

### Cart Management

- Add/remove items with specific sizes
- Size information displayed in cart
- Persistent cart data

### Admin Features

- Product management (Add/Edit/Delete)
- Image upload functionality
- Category management

### Authentication

- User registration and login
- JWT token-based authentication
- Protected routes

## 🔧 Configuration

### Environment Variables

Create `.env` files in respective directories:

**Backend (.env)**

```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=4000
```

### Vite Configuration

Both frontend and admin now use `vite.config.js` with:

- JSX support for `.js` files
- Custom port configuration
- Optimized build settings

## 🚀 Deployment

### Frontend & Admin (Vite)

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Backend

```bash
# Start production server
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test with `npm run dev`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

**Powered by Vite ⚡ for the ultimate development experience!**
