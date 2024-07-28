export function add(x, y) {
    return x + y;
}
export const getRandomElement = (arr) => {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
};
