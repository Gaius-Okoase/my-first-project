//Function  that accepts an array of any type and returns the first element. Use appropriate TypeScript annotations.

//Declaring the function
function getFirstElement (array: any[]): any {
  return array[0];
}
//Invoking the function
let arr1: number[] = [1, 2, 3, 4, 5];
let arr2: string[] = ['Gaius', 'John', 'Segun'];

console.log(`The first element of arr1 is ${getFirstElement(arr1)}`);