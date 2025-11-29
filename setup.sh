#!/bin/bash

# Setup script for Diligion Website
echo "🚀 Setting up Diligion Website..."

# Check if node is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully"

# Create necessary directories
echo "📁 Creating directories..."
mkdir -p public/fonts
mkdir -p public/assets/logo
mkdir -p public/images

echo "✅ Directories created"

# Copy fonts (if they exist)
if [ -d "Branding/Fonts" ]; then
    echo "📋 Copying Arabic fonts..."
    cp Branding/Fonts/*.ttf public/fonts/ 2>/dev/null || true
fi

if [ -d "Branding/Diligion Visual Identity_Folder/Fonts" ]; then
    echo "📋 Copying English fonts..."
    cp "Branding/Diligion Visual Identity_Folder/Fonts"/*.ttf public/fonts/ 2>/dev/null || true
fi

# Copy logo assets (if they exist)
if [ -d "Branding/Brand Assets/SVG" ]; then
    echo "📋 Copying logo assets..."
    cp "Branding/Brand Assets/SVG/Short 1.svg" public/assets/logo/ 2>/dev/null || true
    cp "Branding/Brand Assets/SVG/Mark (W BG).svg" public/assets/logo/ 2>/dev/null || true
    cp "Branding/Brand Assets/SVG/Mark (B BG).svg" public/assets/logo/ 2>/dev/null || true
fi

echo "✅ Setup complete!"
echo ""
echo "🎉 Next steps:"
echo "   1. Run 'npm run dev' to start the development server"
echo "   2. Open http://localhost:3000 in your browser"
echo "   3. Check SETUP_INSTRUCTIONS.md for asset setup details"

