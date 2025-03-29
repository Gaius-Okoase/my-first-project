/*Q1. Write a function that takes an array of numbers and:
 a) Returns a new array with only the even numbers.
 b) Returns the sum of all numbers in the array using .reduce().*/

//Question 1a
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = (nums) => {
    let evenNumbersArray = [];
 for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
        evenNumbersArray.push(nums[i])
    }
 }
 return `The even numbers in the given array are: ${evenNumbersArray.join(", ")}.`;
}

console.log(evenNumbers(numbers));

//Question 1b
const sumNumbers = (nums) => {
   return nums.reduce((a, b) => a + b); 
}

let sum = sumNumbers(numbers);
console.log(`The sum of all numbers in the given array = ${sum}.`)
