"use strict";
{
    // problem-1..............
    // Question: Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.
    function sumArray(numbers) {
        let sum = 0;
        numbers.forEach(num => sum += num);
        return sum;
    }
    console.log(sumArray([1, 2, 3, 4, 5]));
}
