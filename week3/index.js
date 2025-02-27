//WEEK 3 ASSIGNKMENT

//Q1: Function to calculate the sum of two numbers.
function add(a, b) {
    return a + b;
}

console.log(add(4, 9));  //Prints the sum of the two 4 + 9 on the console.

//Q2: Program to print “Hello, World!” and log current date.
console.log("Hello World");

const now = new Date(); //The new Date() object gets current date from browser.
let currentDate = now.toLocaleString(); //Formats the date to the Locale style gotten from the browser.
console.log("Current date is:", currentDate);  //Logs current date on the console.

//Q3: Create a program to print numbers from 1 to 10.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//Q4: Function to find the largest number in an array.
const array = [10, 5, 20, 8, 15];
let largest = array[0];

array.forEach(number => {
    if (number > largest) {
        largest = number;
    }
});

console.log("Largest number is:", largest);