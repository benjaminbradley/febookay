// Utility functions for date-based logic
function getTodaysFlowerType(date) {
    const flowerTypes = ['rose', 'tulip', 'daisy', 'sunflower', 'lily'];
    // Use the day of the year to select a flower type
    const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    return flowerTypes[dayOfYear % flowerTypes.length];
}

function getColorPalette(date) {
    const palettes = [
        ['#FFB5E8', '#FF9CEE', '#FFCCF9'],
        ['#A7D676', '#8BC34A', '#558B2F'],
        ['#FFABAB', '#FFC3A0', '#FFDDC1'],
        ['#FFFFB5', '#FFFF9D', '#F9F871'],
        ['#FFADAD', '#FFD6A5', '#FDFFB6', '#CAFFBF', '#9BF6FF', '#A0C4FF', '#BDB2FF', '#FFC6FF']
    ];
    // Use the month to select a color palette
    return palettes[date.getMonth()];
}
