import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, '../public/assets');
const outputDir = path.join(__dirname, '../public/assets/optimized');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Image sizes for responsive images
const sizes = [300, 600, 900, 1200];

// Quality settings
const jpegQuality = 85;
const webpQuality = 80;
const pngQuality = 90;

async function optimizeImage(inputPath, filename) {
  const baseName = path.parse(filename).name;
  const extension = path.parse(filename).ext.toLowerCase();
  
  console.log(`Optimizing ${filename}...`);
  
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // Generate different sizes
    for (const size of sizes) {
      const resized = image.resize(size, null, {
        withoutEnlargement: true,
        fit: 'inside'
      });
      
      // Generate WebP version
      await resized
        .webp({ quality: webpQuality })
        .toFile(path.join(outputDir, `${baseName}-${size}.webp`));
      
      // Generate optimized original format
      if (extension === '.jpg' || extension === '.jpeg') {
        await resized
          .jpeg({ quality: jpegQuality, progressive: true })
          .toFile(path.join(outputDir, `${baseName}-${size}${extension}`));
      } else if (extension === '.png') {
        await resized
          .png({ quality: pngQuality, progressive: true })
          .toFile(path.join(outputDir, `${baseName}-${size}${extension}`));
      }
    }
    
    // Generate optimized original size
    if (extension === '.jpg' || extension === '.jpeg') {
      await image
        .jpeg({ quality: jpegQuality, progressive: true })
        .toFile(path.join(outputDir, filename));
    } else if (extension === '.png') {
      await image
        .png({ quality: pngQuality, progressive: true })
        .toFile(path.join(outputDir, filename));
    }
    
    // Generate WebP version of original
    await image
      .webp({ quality: webpQuality })
      .toFile(path.join(outputDir, `${baseName}.webp`));
    
    console.log(`✅ Optimized ${filename}`);
    
  } catch (error) {
    console.error(`❌ Error optimizing ${filename}:`, error);
  }
}

async function optimizeAllImages() {
  const files = fs.readdirSync(inputDir);
  const imageFiles = files.filter(file => 
    /\.(jpg|jpeg|png)$/i.test(file) && !file.includes('-300') && !file.includes('-600') && !file.includes('-900') && !file.includes('-1200')
  );
  
  console.log(`Found ${imageFiles.length} images to optimize...`);
  
  for (const file of imageFiles) {
    await optimizeImage(path.join(inputDir, file), file);
  }
  
  console.log('🎉 Image optimization complete!');
}

optimizeAllImages().catch(console.error); 