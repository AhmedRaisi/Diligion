#!/bin/bash

# Run development server
echo "🚀 Starting Diligion Website development server..."
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "⚠️  node_modules not found. Installing dependencies..."
    npm install
fi

# Start dev server
echo "✅ Starting Next.js development server..."
echo "📍 Server will be available at: http://localhost:3000"
echo ""
npm run dev

