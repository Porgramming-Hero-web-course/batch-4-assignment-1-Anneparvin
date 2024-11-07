"use strict";
{
    // problem-2.............................
    // question: Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.
    function removeDuplicates(numbers) {
        return numbers.filter((num, index) => numbers.indexOf(num) === index);
    }
    console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
}