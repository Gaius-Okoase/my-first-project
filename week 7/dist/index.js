//Function  that accepts an array of any type and returns the first element. Use appropriate TypeScript annotations.
//Declaring the function
function getFirstElement(array) {
    return array[0];
}
//Invoking the function
var arr1 = [1, 2, 3, 4, 5];
var arr2 = ['Gaius', 'John', 'Segun'];
console.log("The first element of arr1 is ".concat(getFirstElement(arr1), "."));
console.log("The first element of arr2 is ".concat(getFirstElement(arr2), "."));
