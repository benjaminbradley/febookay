// Utility functions for date-based logic
export function getTodaysFlowerType(randInt) {
    const flowerTypes = ['rose', 'tulip', 'daisy', 'sunflower', 'lily'];
    return flowerTypes[randInt(flowerTypes.length)];
}

export function getColorPalette(randInt) {
    function validatePalette(palette) {
        const petalCount = 2;
        const stemCount = 1;
        const bgCount = 2;
        const isValid = palette.petal_colors.length >= petalCount &&
                        palette.stem_colors.length >= stemCount &&
                        palette.bg_colors.length >= bgCount;
        if (!isValid) {
            console.warn('Invalid color palette detected:', palette);
        }
        return isValid;
    }

    const palettes = [
        { // 0
            petal_colors: ['#FFB5E8', '#FF9CEE'],
            stem_colors: ['#8BC34A'],
            bg_colors: ['#FFCCF9', '#FFFFFF']
        },
        { // 1
            petal_colors: ['#A7D676', '#8BC34A'],
            stem_colors: ['#558B2F', '#33691E'],
            bg_colors: ['#F0F4C3', '#DCEDC8', '#C5E1A5']
        },
        { // 2
            petal_colors: ['#FFADAD', '#FFC6FF'],
            stem_colors: ['#FFD6A5', '#FDFFB6'],
            bg_colors: ['#CAFFBF', '#9BF6FF']
        },
        { // 10
            petal_colors: ['#FFADAD', '#FFD6A5', '#FDFFB6'],
            stem_colors: ['#CAFFBF', '#9BF6FF'],
            bg_colors: ['#A0C4FF', '#BDB2FF', '#FFC6FF', '#FFFFFC']
        },
        {
            petal_colors: ['#A7D676', '#8BC34A'],
            stem_colors: ['#558B2F', '#33691E'],
            bg_colors: ['#F0F4C3', '#DCEDC8', '#C5E1A5']
        },
        {
            petal_colors: ['#FFADAD', '#FFD6A5', '#FDFFB6'],
            stem_colors: ['#CAFFBF', '#9BF6FF'],
            bg_colors: ['#A0C4FF', '#BDB2FF', '#FFC6FF', '#FFFFFC']
        }
    ];
    let selectedPalette;
    do {
        const paletteIndex = randInt(palettes.length);
        selectedPalette = palettes[paletteIndex];
    } while (!validatePalette(selectedPalette));

    return selectedPalette;
}
