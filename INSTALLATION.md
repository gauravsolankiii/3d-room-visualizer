# Installation & Setup Guide

## Prerequisites

Before you begin, make sure you have the following installed:
- Node.js (version 14 or higher)
- npm (comes with Node.js)

To check if you have Node.js installed, run:
```bash
node --version
npm --version
```

## Step-by-Step Installation

### 1. Extract the Project
Extract the zip file to your desired location.

### 2. Open Terminal/Command Prompt
Navigate to the project directory:
```bash
cd path/to/3d-room-visualizer
```

### 3. Install Dependencies
Run the following command to install all required packages:
```bash
npm install
```

This will install:
- React
- Three.js
- React Three Fiber
- React Three Drei
- And other dependencies

The installation may take 2-5 minutes depending on your internet connection.

### 4. Start the Development Server
Once installation is complete, start the application:
```bash
npm start
```

The application will automatically open in your default browser at `http://localhost:3000`

If it doesn't open automatically, manually open your browser and go to:
```
http://localhost:3000
```

## Adding 3D Models (Optional)

### Option 1: Use Default Room
The application will create a basic room automatically if no GLB files are present.

### Option 2: Add Your Own GLB Models
1. Place your `.glb` files in the `public/models/` folder
2. Name them according to room types:
   - `bedroom.glb`
   - `living.glb`
   - `kitchen.glb`
   - `office.glb`
3. Restart the application

## Troubleshooting

### Issue: "npm: command not found"
**Solution**: Install Node.js from https://nodejs.org/

### Issue: Port 3000 is already in use
**Solution**: Either:
1. Stop the application using port 3000
2. Or run on a different port:
   ```bash
   PORT=3001 npm start
   ```

### Issue: Blank screen or errors
**Solution**: 
1. Clear npm cache: `npm cache clean --force`
2. Delete `node_modules` folder
3. Delete `package-lock.json`
4. Run `npm install` again
5. Run `npm start`

### Issue: "Module not found" errors
**Solution**: Make sure all dependencies are installed:
```bash
npm install
```

## Building for Production

To create a production-ready build:
```bash
npm run build
```

This creates an optimized build in the `build` folder that you can deploy to any web server.

## Deployment

### Deploy to Local Server
1. Run `npm run build`
2. Copy the contents of the `build` folder to your web server

### Deploy to Netlify/Vercel
1. Create an account on Netlify or Vercel
2. Connect your repository or upload the build folder
3. Deploy!

## System Requirements

- **OS**: Windows 10+, macOS 10.14+, or Linux
- **RAM**: 4GB minimum, 8GB recommended
- **Browser**: Latest Chrome, Firefox, Safari, or Edge
- **GPU**: For best performance, a dedicated GPU is recommended

## Support

If you encounter any issues:
1. Check the console for error messages (F12 in browser)
2. Refer to the README.md file
3. Make sure all dependencies are properly installed

## Next Steps

After successful installation:
1. Click "Select Room" to choose a room type
2. Browse materials in the "Product" tab
3. Click on objects in the 3D view to select them
4. Apply materials and customize layouts
5. Save and share your designs!

Enjoy creating beautiful room visualizations!
