#!/usr/bin/env node
/**
 * Script para otimizar imagens do projeto Million Capital
 * Converte para WebP/MozJPEG conforme necessário
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../public/images');
const outputDir = path.join(__dirname, '../public/images/optimized');

// Criar diretório de saída se não existir
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImages() {
  const files = fs.readdirSync(imagesDir);
  
  for (const file of files) {
    const filePath = path.join(imagesDir, file);
    const ext = path.extname(file).toLowerCase();
    const baseName = path.basename(file, ext);
    
    try {
      if (ext === '.svg') {
        // Converter SVGs grandes para WebP
        const stats = fs.statSync(filePath);
        if (stats.size > 1024 * 1024) { // > 1MB
          console.log(`Converting large SVG: ${file}`);
          await sharp(filePath)
            .webp({ quality: 85, effort: 6 })
            .toFile(path.join(outputDir, `${baseName}.webp`));
        }
      } else if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        // Converter fotos para MozJPEG (via sharp)
        console.log(`Converting photo: ${file}`);
        await sharp(filePath)
          .jpeg({ 
            quality: 85, 
            progressive: true,
            mozjpeg: true // Usa MozJPEG encoder
          })
          .toFile(path.join(outputDir, `${baseName}.jpg`));
          
        // Também criar versão WebP
        await sharp(filePath)
          .webp({ quality: 85, effort: 6 })
          .toFile(path.join(outputDir, `${baseName}.webp`));
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  }
  
  console.log('✅ Image optimization complete!');
}

optimizeImages();