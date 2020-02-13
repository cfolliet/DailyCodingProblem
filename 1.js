/*
Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
For example, given [2, 21, 10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
*/

const array = [2, 21, 10, 15, 3, 7];
const k = 17;

function addUp(array, k) {
    let match = false;
    array.forEach((element1, index1) => {
        array.forEach((element2, index2) => {
            if (index1 != index2 && element1 + element2 == k) {
                match = true;
            }
        });
    });

    return match;
}

function addUp2(array, k) {
    const sorted = array.sort((a, b) => b - a);
    const filtered = sorted.filter(i => i + sorted[sorted.length - 1] < k);
    return addUp(filtered, k);
}

let result = addUp2(array, k);

console.log(result);