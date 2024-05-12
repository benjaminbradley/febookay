

export function drawStripesPattern(svg, startY, width, height, color, orientation) {
  const stripeWidth = 10; // Adjust stripe width as needed
  let x = 0, y = startY;
  if (orientation === 'horizontal') {
    while (y < startY + height) {
      const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      rect.setAttribute('x', 0);
      rect.setAttribute('y', y);
      rect.setAttribute('width', width);
      rect.setAttribute('height', stripeWidth);
      rect.setAttribute('fill', color);
      svg.appendChild(rect);
      y += stripeWidth * 2; // Double the stripe width for spacing
    }
  } else if (orientation === 'vertical') {
    while (x < width) {
      const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      rect.setAttribute('x', x);
      rect.setAttribute('y', startY);
      rect.setAttribute('width', stripeWidth);
      rect.setAttribute('height', height);
      rect.setAttribute('fill', color);
      svg.appendChild(rect);
      x += stripeWidth * 2; // Double the stripe width for spacing
    }
  }
}
export function drawCirclesPattern(svg, startY, width, height, color, size, fill) {
  const circleRadius = size === 'large' ? 20 : 10; // Large circles have a radius of 20, small circles have a radius of 10
  const spacing = size === 'large' ? circleRadius * 3 : circleRadius * 2; // Ensure there's at least one radius worth of space around each circle
  for (let y = (size === 'large' ? circleRadius : 0) + startY + circleRadius; y < startY + height; y += spacing) {
    for (let x = circleRadius; x < width; x += spacing) {
      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle.setAttribute('cx', x);
      circle.setAttribute('cy', y);
      circle.setAttribute('r', circleRadius);
      circle.setAttribute('fill', fill ? color : 'none');
      circle.setAttribute('stroke', fill ? 'none' : color);
      circle.setAttribute('stroke-width', '2');
      svg.appendChild(circle);
    }
  }
}
export function drawCheckeredPattern(svg, startY, width, height, color) {
  const squareSize = 20; // Example size, adjust as needed
  for (let y = startY; y < startY + height; y += squareSize) {
      for (let x = 0; x < width; x += squareSize) {
        if ((Math.floor(x / squareSize) + Math.floor(y / squareSize)) % 2 === 0) {
              const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
              rect.setAttribute('x', x);
              rect.setAttribute('y', y);
              rect.setAttribute('width', squareSize);
              rect.setAttribute('height', squareSize);
              rect.setAttribute('fill', color);
              rect.style.zIndex = 10; // Ensure checker pattern is above the background but below the stem
              svg.appendChild(rect);
          }
      }
  }
}

