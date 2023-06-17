export const getImageDimensionFromUrl = (imageUr) => {
    const regex = /-(\d+)x(\d+)\./
    const matches = imageUr.match(regex)
    return {
        width: matches[1] || 1200,
        height: matches[2] || 600
    }
}

export const isMobile = () => {
    const mediaQuery = window.matchMedia('(max-width: 640px)');
    return mediaQuery.matches;
}