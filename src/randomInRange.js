// @ts-check

/**
 * Sort 2 numbers into smallest/largest
 * @param {number} n1 A number 
 * @param {number} n2 A number
 * @returns {[number,number]}
 */
function order(n1, n2) {
    return [n1 < n2 ? n1 : n2, n1 >= n2 ? n1 : n2];
}

/**
 * Returns a random number within a given range, inclusive of the given values
 * @param {number} n1 number up to this value, or with n2, number FROM this value to n2
 * @param {number} [n2=0] (optional) end of range
 * @return {number}
 */
export default function randomInRange(n1, n2 = 0) {
    const [s, e] = order(n1, n2);
    return s + Math.round(Math.random() * (e - s));
}
