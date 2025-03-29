/* 
Q3. Create a TypedArray (e.g., Uint8Array) with a length of 5. Populate it with values and:
a) Print the array to the console.
b) Reverse the array and display the result.
*/

//* Question 1a
//Create a Uint8Array and populate it with values.
let typedArray = new Uint8Array([1, 2, 3, 4, 5]);

// Print the byte length of the array.
console.log("Byte length of the typed array:", typedArray.byteLength); // Output: 5

// Print the original typed array.
console.log("Original typed array:", typedArray); // Output: Uint8Array(5) [1, 2, 3, 4, 5]

//* Question 2a - Reverse the typed array
// Use the spread operator to convert the typed array to a regular array, reverse it, and create a new Uint8Array
let reverseTypedArray = new Uint8Array([...typedArray].reverse());

// Print the reversed typed array
console.log("Reversed typed array:", reverseTypedArray); // Output: Uint8Array(5) [5, 4, 3, 2, 1]