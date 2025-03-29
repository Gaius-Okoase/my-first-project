//Implement a function that flattens a nested array (e.g., [[1, 2], [3, 4], [5]] to [1, 2, 3, 4, 5]) using ES6 array methods.

let secondNestedNumbers = [[1, 2], [3, 4, 5], [6, 7, 8, 9, 10]];
const flat = (nestArr) => {
   return nestArr.flat();
}

console.log("The nested array has been flattened to a single array: ", flat(secondNestedNumbers));
