// Utility functions for date-based logic
export function getTodaysFlowerType(date) {
    const flowerTypes = ['rose', 'tulip', 'daisy', 'sunflower', 'lily'];
    // Use the day of the year to select a flower type
    const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    return flowerTypes[dayOfYear % flowerTypes.length];
}

export function getColorPalette(date) {
    function validatePalette(palette) {
        const petalCount = 2;
        const stemCount = 1;
        const bgCount = 2;
        return palette.petal_colors.length >= petalCount &&
               palette.stem_colors.length >= stemCount &&
               palette.bg_colors.length >= bgCount;
        const isValid = palette.petal_colors.length >= petalCount &&
                        palette.stem_colors.length >= stemCount &&
                        palette.bg_colors.length >= bgCount;
        if (!isValid) {
            console.warn('Invalid color palette detected:', palette);
        }
        return isValid;
    }

    const palettes = {
        'January': {
            petal_colors: ['#FFB5E8', '#FF9CEE'],
            stem_colors: ['#8BC34A'],
            bg_colors: ['#FFCCF9', '#FFFFFF']
        },
        // ... other palettes ...
    };
    // ... rest of the function remains unchanged ...
        'February': {
            petal_colors: ['#A7D676', '#8BC34A'],
            stem_colors: ['#558B2F', '#33691E'],
            bg_colors: ['#F0F4C3', '#DCEDC8', '#C5E1A5']
        },
        // ... Add entries for other months
        'December': {
            petal_colors: ['#FFADAD', '#FFD6A5', '#FDFFB6'],
            stem_colors: ['#CAFFBF', '#9BF6FF'],
            bg_colors: ['#A0C4FF', '#BDB2FF', '#FFC6FF', '#FFFFFC']
        }
    };
    // Use the month to select a color palette
    const monthNames = ["January", "February", "December"];
    let selectedPalette;
    do {
        selectedPalette = palettes[monthNames[Math.floor(Math.random() * monthNames.length)]];
    } while (!validatePalette(selectedPalette));

    return selectedPalette;
}
