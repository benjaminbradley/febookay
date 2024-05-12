// Include calendar and canvas functionality
import { getTodaysFlowerType, getColorPalette } from './calendar.js';
import { drawFlower } from './canvas.js';

// Main application logic for generating the bouquet
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('bouquetCanvas');
    const context = canvas.getContext('2d');

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Get today's date
    const today = new Date();
    // Get flower type and color palette for today
    const flowerType = getTodaysFlowerType(today);
    const colorPalette = getColorPalette(today);

    // Draw a basic flower using the color palette
    drawFlower(context, flowerType, colorPalette);

    // TODO: Implement the drawing logic
});
