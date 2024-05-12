// Include calendar and canvas functionality
import { getTodaysFlowerType, getColorPalette } from './calendar.js';
import { drawFlower } from './canvas.js';

//ref: https://gist.github.com/blixt/f17b47c62508be59987b
function Random(seed) {
    this._seed = seed % 2147483647;
    if (this._seed <= 0) this._seed += 2147483646;
}
Random.prototype.next = function () {
    return this._seed = this._seed * 16807 % 2147483647;
};
Random.prototype.nextFloat = function () {
    return (this.next() - 1) / 2147483646;
};
var rand;
function randInt(max) {
    return Math.floor(max*rand.nextFloat());
}

// Main application logic for generating the bouquet
document.addEventListener('DOMContentLoaded', function() {
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('id', 'svg_canvas');
    var canvas_w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var canvas_h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    console.log("Canvas size: "+canvas_w+'x'+canvas_h);
    svg.setAttribute('width', canvas_w);
    svg.setAttribute('height', canvas_h);
    svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    document.body.appendChild(svg);


    // Get today's date
    const today = new Date();
    rand = new Random(today.getTime());
    // Get flower type and color palette for today
    const flowerType = getTodaysFlowerType(randInt);
    const colorPalette = getColorPalette(randInt);

    // Draw a basic flower using the color palette
    drawFlower(svg, flowerType, colorPalette, randInt);

    // TODO: Implement the drawing logic
});
