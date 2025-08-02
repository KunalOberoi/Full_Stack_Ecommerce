#!/bin/bash

# E-commerce Development Server Starter
echo "🚀 Starting E-commerce Development Servers..."

# Function to kill existing processes
cleanup() {
    echo "🛑 Stopping servers..."
    pkill -f "vite.*3000"
    pkill -f "vite.*3001" 
    pkill -f "node.*4000"
    exit 0
}

# Trap Ctrl+C
trap cleanup SIGINT

# Start Backend Server
echo "📦 Starting Backend Server (Port 4000)..."
cd backend && npm start &
BACKEND_PID=$!

# Wait a moment for backend to start
sleep 3

# Start Frontend Server  
echo "🌐 Starting Frontend Server (Port 3000)..."
cd ../frontend && npm run dev &
FRONTEND_PID=$!

# Start Admin Panel
echo "⚙️ Starting Admin Panel (Port 3001)..."
cd ../admin && npm run dev &
ADMIN_PID=$!

echo ""
echo "✅ All servers started successfully!"
echo ""
echo "📱 Frontend:    http://localhost:3000"
echo "⚙️  Admin Panel: http://localhost:3001"  
echo "📦 Backend:     http://localhost:4000"
echo ""
echo "Press Ctrl+C to stop all servers"

# Wait for all background processes
wait $BACKEND_PID $FRONTEND_PID $ADMIN_PID
