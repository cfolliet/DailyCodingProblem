/*
Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].
Follow-up: what if you can't use division?
*/

const array = [1, 2, 3, 4, 5];

function easy() {
    return array.map((a, index) => {
        return array.reduce((acc, value) => acc * value, 1) / array[index];
    })
}

function withoutDivision() {
    return array.map((item, index) => {
        let product = 1;
        array.forEach((a, i) => {
            if (index != i) {
                product *= a;
            }
        });
        return product;
    })
}

function withoutDivision2() {
    return array.map((a, index) => {
        return array.filter((item, index2) => index != index2).reduce((acc, value) => acc * value, 1);
    })
}

console.log(withoutDivision2())