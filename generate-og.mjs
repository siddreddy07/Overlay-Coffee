import sharp from "sharp";

const width = 1200;
const height = 630;

const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${width}" height="${height}" fill="#F8F6F2"/>
  <text x="50%" y="40%" text-anchor="middle" font-family="Georgia, serif" font-size="72" font-weight="bold" fill="#2C2C2C">Overlay Coffee</text>
  <text x="50%" y="55%" text-anchor="middle" font-family="Georgia, serif" font-size="36" fill="#6B5B4F">Melbourne</text>
  <line x1="45%" y1="62%" x2="55%" y2="62%" stroke="#6B5B4F" stroke-width="2"/>
  <text x="50%" y="72%" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" fill="#888888">Specialty Coffee &amp; Matcha</text>
</svg>`;

await sharp(Buffer.from(svg)).jpeg({ quality: 90 }).toFile("public/og-image.jpg");
console.log("og-image.jpg created");
