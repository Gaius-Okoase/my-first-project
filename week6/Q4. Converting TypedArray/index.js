// Q4.  Write a function that converts a regular array of integers into a TypedArray and vice versa.

// Function to convert a regular array to a TypedArray and back to a regular array
const convertArray = (regularArray) => {
   // Convert the regular array to a Uint8Array (TypedArray)
   let convertToTypedArray = new Uint8Array(regularArray);

   // Convert the TypedArray back to a regular array
   let convertBackToRegularArray = Array.from(convertToTypedArray);

   // Return both the TypedArray and the converted regular array
   return [convertToTypedArray, convertBackToRegularArray];  
};

// Generate a random array of integers (length 10, values between 1 and 10)
let randomNumbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10) + 1);
console.log("Original regular array:", randomNumbers);

// Call the function to perform the conversions
let [typed, regular] = convertArray(randomNumbers);

// Print the TypedArray
console.log("Converted to TypedArray:", typed);

// Print the array converted back to a regular array
console.log("Converted back to regular array:", regular);