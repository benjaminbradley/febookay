// Export the drawFlower function for canvas drawing
export function drawFlower(context, type, colorPalette) {
    const { petal_colors, stem_colors, bg_colors } = colorPalette;
    const canvasWidth = context.canvas.width;
    const canvasHeight = context.canvas.height;

    console.log('Drawing flower with type:', type);
    console.log('Canvas size:', canvasWidth, 'x', canvasHeight);

    // Draw background
    const splitPosition = canvasHeight * (0.4 + Math.random() * 0.2);
    context.fillStyle = bg_colors[Math.floor(Math.random() * bg_colors.length)];
    console.log('Background top color:', context.fillStyle);
    context.fillRect(0, 0, canvasWidth, splitPosition);
    context.fillStyle = bg_colors[Math.floor(Math.random() * bg_colors.length)];
    console.log('Background bottom color:', context.fillStyle);
    context.fillRect(0, splitPosition, canvasWidth, canvasHeight - splitPosition);

    // Draw stem
    const stemX = canvasWidth / 2;
    const stemTopY = canvasHeight * 0.25;
    const stemBottomY = canvasHeight - canvasHeight * 0.3;
    context.beginPath();
    context.moveTo(stemX, stemTopY);
    context.lineTo(stemX, stemBottomY);
    context.strokeStyle = stem_colors[Math.floor(Math.random() * stem_colors.length)];
    console.log('Stem color:', context.strokeStyle);
    context.lineWidth = 10;
    context.stroke();

    // Draw petals
    const petalCount = Math.floor(Math.random() * 13) + 1;
    const petalColor = petal_colors[Math.floor(Math.random() * petal_colors.length)];
    console.log('Petal count:', petalCount, 'Petal color:', petalColor);
    const petalRadius = 50;
    const petalWidth = 20;
    const petalHeight = 80;
    for (let i = 0; i < petalCount; i++) {
        const angle = (Math.PI * 2 / petalCount) * i;
        const petalX = stemX + petalRadius * Math.cos(angle);
        const petalY = stemTopY - petalRadius * Math.sin(angle);
        context.save();
        context.translate(petalX, petalY);
        context.rotate(angle);
        context.beginPath();
        context.ellipse(0, 0, petalWidth, petalHeight, 0, 0, 2 * Math.PI);
        context.fillStyle = petalColor;
        context.fill();
        context.restore();
        console.log('Drawing petal at angle:', angle, 'Position:', petalX, petalY);
    }
}
