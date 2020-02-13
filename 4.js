/*

Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.
For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
You can modify the input array in-place.

*/

const array = [3, 4, -1, 1];
const sorted = array.filter(a => a > 0).sort((a, b) => a - b);
let result = sorted[sorted.length - 1] + 1;

for (let index = 0; index < sorted.length - 1; index++) {
    let item = sorted[index];
    let next = sorted[index + 1];

    if (item > 0 && item + 1 != next) {
        result = item + 1;
        break
    }
}

console.log(result);