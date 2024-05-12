import {
    drawCheckeredPattern,
    drawCirclesPattern,
    drawStripesPattern,
} from './drawPatterns.js';

// Export the drawFlower function for canvas drawing
export function drawFlower(svg, type, colorPalette, randInt) {
    const { petal_colors, stem_colors, bg_colors, bg_accent_color } = colorPalette;
    const svgWidth = svg.getAttribute('width');
    const svgHeight = svg.getAttribute('height');

    // Choose a stem color for the petal outline
    const petalOutlineColor = stem_colors[randInt(stem_colors.length)];

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

    // Add background accent decoration to the lower panel
    const decorationType = randInt(6); // Randomly choose a decoration pattern
    switch (randInt(6)) {
        case 1: // Checkered pattern
            drawCheckeredPattern(svg, splitPosition, svgWidth, svgHeight - splitPosition, bg_accent_color);
            break;
        case 2: // Horizontal stripes
            drawStripesPattern(svg, splitPosition, svgWidth, svgHeight - splitPosition, bg_accent_color, 'horizontal');
            break;
        case 3: // Vertical stripes
            drawStripesPattern(svg, splitPosition, svgWidth, svgHeight - splitPosition, bg_accent_color, 'vertical');
            break;
        case 4: // Large hollow circles
            drawCirclesPattern(svg, splitPosition, svgWidth, svgHeight - splitPosition, bg_accent_color, 'large', false);
            break;
        case 5: // Small solid circles
            drawCirclesPattern(svg, splitPosition, svgWidth, svgHeight - splitPosition, bg_accent_color, 'small', true);
            break;
        // case 0 and default: // Solid color, no additional decoration needed
    }

    // Draw stem with drop shadow
    const stemX = svgWidth / 2;
    const stemTopY = svgHeight * 0.25;
    const stemBottomY = svgHeight - svgHeight * 0.2;
    const stemColor = stem_colors[randInt(stem_colors.length)];
    console.log('Stem color:', stemColor);

    // Create a filter for the drop shadow
    const defs2 = document.createElementNS("http://www.w3.org/2000/svg", "defs2");
    const filter2 = document.createElementNS("http://www.w3.org/2000/svg", "filter2");
    filter2.setAttribute('id', 'stemDropShadow');
    filter2.setAttribute('x', '-50%');
    filter2.setAttribute('y', '-50%');
    filter2.setAttribute('width', '200%');
    filter2.setAttribute('height', '200%');
    const feDropShadow2 = document.createElementNS("http://www.w3.org/2000/svg", "feDropShadow2");
    feDropShadow2.setAttribute('dx', '2');
    feDropShadow2.setAttribute('dy', '2');
    feDropShadow2.setAttribute('stdDeviation', '2');
    filter2.appendChild(feDropShadow2);
    defs2.appendChild(filter2);
    svg.appendChild(defs2);

    // Draw the stem line with drop shadow filter applied
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute('x1', stemX);
    line.setAttribute('y1', stemTopY);
    line.setAttribute('x2', stemX);
    line.setAttribute('y2', stemBottomY);
    line.setAttribute('stroke', stemColor);
    line.setAttribute('stroke-width', 10);
    line.setAttribute('filter', 'url(#stemDropShadow)');
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
        const petalStartX = stemX;
        const petalStartY = stemTopY;
        const petalEndX = stemX + petalRadius * Math.cos(angle);
        const petalEndY = stemTopY + petalRadius * Math.sin(angle);
        const ellipse = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
        ellipse.setAttribute('cx', (petalStartX + petalEndX) / 2);
        ellipse.setAttribute('cy', (petalStartY + petalEndY) / 2);
        ellipse.setAttribute('rx', petalRadius / 2);
        ellipse.setAttribute('ry', petalHeight / 2);
        ellipse.setAttribute('fill', petalColor);
        ellipse.setAttribute('stroke', petalOutlineColor);
        ellipse.setAttribute('stroke-width', '2');
        ellipse.setAttribute('transform', `rotate(${angle * 180 / Math.PI} ${(petalStartX + petalEndX) / 2} ${(petalStartY + petalEndY) / 2})`);
        svg.appendChild(ellipse);
        console.log('Drawing petal at angle:', angle, 'Position:', (petalStartX + petalEndX) / 2, (petalStartY + petalEndY) / 2);
    }

    // Draw the greeting text at the bottom of the canvas
    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    const filter = document.createElementNS("http://www.w3.org/2000/svg", "filter");
    filter.setAttribute('id', 'dropshadow');
    const feDropShadow = document.createElementNS("http://www.w3.org/2000/svg", "feDropShadow");
    feDropShadow.setAttribute('dx', '2');
    feDropShadow.setAttribute('dy', '2');
    feDropShadow.setAttribute('stdDeviation', '3');
    filter.appendChild(feDropShadow);
    defs.appendChild(filter);
    svg.appendChild(defs);

    const text1 = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text1.setAttribute('x', '50%');
    text1.setAttribute('y', svgHeight - 40); // Adjusted for spacing
    text1.setAttribute('fill', petalColor);
    text1.setAttribute('font-family', 'sans-serif');
    text1.setAttribute('font-size', '24px');
    text1.setAttribute('text-anchor', 'middle');
    text1.setAttribute('alignment-baseline', 'ideographic');
    text1.setAttribute('filter', 'url(#dropshadow)');
    text1.textContent = 'Happy Mother\'s Day, Effie!';
    svg.appendChild(text1);

    const text2 = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text2.setAttribute('x', '50%');
    text2.setAttribute('y', svgHeight - 10); // Positioned below the first line of text
    text2.setAttribute('fill', petalColor);
    text2.setAttribute('font-family', 'sans-serif');
    text2.setAttribute('font-size', '24px');
    text2.setAttribute('text-anchor', 'middle');
    text2.setAttribute('alignment-baseline', 'ideographic');
    text2.setAttribute('filter', 'url(#dropshadow)');
    text2.textContent = 'Love, Benji May 12, 2024';
    svg.appendChild(text2);
}