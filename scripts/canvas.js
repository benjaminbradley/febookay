// Export the drawFlower function for canvas drawing
export function drawFlower(svg, type, colorPalette, randInt) {
    const { petal_colors, stem_colors, bg_colors } = colorPalette;
    const svgWidth = svg.getAttribute('width');
    const svgHeight = svg.getAttribute('height');

    // ... existing code for drawing background ...

    // Draw stem
    // ... existing code for drawing stem ...

    // Choose a stem color for the petal outline
    const petalOutlineColor = stem_colors[randInt(stem_colors.length)];

    console.log('Drawing flower with type:', type);
    console.log('SVG size:', svgWidth, 'x', svgHeight);

    // Draw background
    const splitPosition = svgHeight * (0.4 + randInt(2) * 0.1);
    let bgTopColor = bg_colors[randInt(bg_colors.length)];
    let bgBottomColor;
    do {
        bgBottomColor = bg_colors[randInt(bg_colors.length)];
    } while (bgBottomColor === bgTopColor);
    console.log('Background top color:', bgTopColor);
    console.log('Background bottom color:', bgBottomColor);
    const rectTop = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rectTop.setAttribute('x', 0);
    rectTop.setAttribute('y', 0);
    rectTop.setAttribute('width', svgWidth);
    rectTop.setAttribute('height', splitPosition);
    rectTop.setAttribute('fill', bgTopColor);
    svg.appendChild(rectTop);
    const rectBottom = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rectBottom.setAttribute('x', 0);
    rectBottom.setAttribute('y', splitPosition);
    rectBottom.setAttribute('width', svgWidth);
    rectBottom.setAttribute('height', svgHeight - splitPosition);
    rectBottom.setAttribute('fill', bgBottomColor);
    svg.appendChild(rectBottom);

    // Draw stem
    // ... rest of the function remains unchanged ...
    const stemX = svgWidth / 2;
    const stemTopY = svgHeight * 0.25;
    const stemBottomY = svgHeight - svgHeight * 0.3;
    const stemColor = stem_colors[randInt(stem_colors.length)];
    console.log('Stem color:', stemColor);
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute('x1', stemX);
    line.setAttribute('y1', stemTopY);
    line.setAttribute('x2', stemX);
    line.setAttribute('y2', stemBottomY);
    line.setAttribute('stroke', stemColor);
    line.setAttribute('stroke-width', 10);
    svg.appendChild(line);

    // Draw petals
    let petalColor;
    const petalCount = randInt(13) + 1;
    petalColor = petal_colors[randInt(petal_colors.length)];
    console.log('Petal count:', petalCount, 'Petal color:', petalColor);
    const petalRadius = 50;
    const petalWidth = 20;
    const petalHeight = 80;
    for (let i = 0; i < petalCount; i++) {
        const angle = (Math.PI * 2 / petalCount) * i;
        const petalX = stemX + petalRadius * Math.cos(angle) - petalWidth / 2;
        const petalY = stemTopY - petalRadius * Math.sin(angle) - petalHeight / 2;
        const ellipse = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
        ellipse.setAttribute('cx', petalX);
        ellipse.setAttribute('cy', petalY);
        ellipse.setAttribute('rx', petalWidth);
        ellipse.setAttribute('ry', petalHeight);
        ellipse.setAttribute('fill', petalColor);
        ellipse.setAttribute('stroke', petalOutlineColor);
        ellipse.setAttribute('stroke-width', '2'); // Adjust stroke width as needed
        ellipse.setAttribute('transform', `rotate(${angle * 180 / Math.PI} ${petalX} ${petalY})`);
        svg.appendChild(ellipse);
        console.log('Drawing petal at angle:', angle, 'Position:', petalX, petalY);
    }

    // Draw the greeting text at the bottom of the canvas
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute('x', '50%');
    text.setAttribute('y', svgHeight - 10);
    text.setAttribute('fill', petalColor);
    text.setAttribute('font-family', 'sans-serif');
    text.setAttribute('font-size', '24px');
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('alignment-baseline', 'ideographic');
    text.textContent = 'Happy Mother\'s Day, Effie! Love, Benji May 12, 2024';
    svg.appendChild(text);
}
