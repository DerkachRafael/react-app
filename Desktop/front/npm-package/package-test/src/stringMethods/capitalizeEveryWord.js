export const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());

//example of usage capitalizeEveryWord('hello world!'); // 'Hello World!'
