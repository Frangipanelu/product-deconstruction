/**
 * capture-screenshots.js
 * 
 * Usage: node capture-screenshots.js <url> <output-dir>
 * Example: node capture-screenshots.js https://usegrowthos.com ./screenshots
 * 
 * Captures 3 standard screenshots:
 *   1. Homepage hero (1440x900 viewport)
 *   2. Product/features page (if exists)
 *   3. About/team page (if exists)
 * 
 * Output: hero.png, product.png, about.png
 * Requires: playwright (npm install playwright)
 */

const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

async function captureScreenshots(url, outputDir) {
  if (!url || !outputDir) {
    console.error('Usage: node capture-screenshots.js <url> <output-dir>');
    process.exit(1);
  }

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Detect Chrome path
  const chromePaths = [
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/usr/bin/google-chrome',
  ];
  const execPath = chromePaths.find(p => fs.existsSync(p)) || undefined;

  const browser = await chromium.launch({
    ...(execPath ? { executablePath: execPath } : {}),
    headless: true
  });

  const baseURL = url.replace(/\/$/, '');
  const pages = [
    { name: 'hero', path: '/' },
    { name: 'product', path: '/product' },
    { name: 'about', path: '/about' },
  ];

  for (const pg of pages) {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    const targetURL = baseURL + pg.path;
    
    try {
      await page.goto(targetURL, { waitUntil: 'networkidle', timeout: 20000 });
      await page.waitForTimeout(1500);
      
      await page.screenshot({
        path: path.join(outputDir, `${pg.name}.png`),
        clip: { x: 0, y: 0, width: 1440, height: 900 }
      });
      
      console.log(`✓ ${pg.name}: ${targetURL}`);
    } catch (e) {
      console.log(`✗ ${pg.name}: ${targetURL} (${e.message.split('\n')[0]})`);
    }
    
    await page.close();
  }

  await browser.close();
  console.log(`\nScreenshots saved to ${outputDir}`);
}

const [url, dir] = process.argv.slice(2);
captureScreenshots(url, dir);
