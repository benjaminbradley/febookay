

export function drawStripesPattern(svg, startY, width, height, color, orientation) {
  // Implementation of stripes pattern
}

export function drawCirclesPattern(svg, startY, width, height, color, size, fill) {
  // Implementation of circles pattern
}

export function drawCheckeredPattern(svg, startY, width, height, color) {
  const squareSize = 20; // Example size, adjust as needed
  for (let y = startY; y < startY + height; y += squareSize) {
      for (let x = 0; x < width; x += squareSize) {
        console.log(`DEBUG: adding square`, y, x)
        if ((Math.floor(x / squareSize) + Math.floor(y / squareSize)) % 2 === 0) {
              const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
              rect.setAttribute('x', x);
              rect.setAttribute('y', y);
              rect.setAttribute('width', squareSize);
              rect.setAttribute('height', squareSize);
              rect.setAttribute('fill', color);
              rect.style.zIndex = 10; // Ensure checker pattern is above the background but below the stem
              svg.appendChild(rect);
              console.log(`DEBUG: added square`, rect)
          }
      }
  }
}

