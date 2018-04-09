export const truncateString = (str, num) =>
    str.length > num ? str.slice(0, num > 3 ? num - 3 : num) + '...' : str;

//example of usage truncateString('boomerang', 7); // 'boom...'
