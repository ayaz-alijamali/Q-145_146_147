// Question _________________ 145


// Define a function that accepts a callback
function invokeCallback(callback: (arg1: number, arg2: string) => void) {
    // Invoke the callback with predefined arguments
    callback(10, "Hello, TypeScript!");
  }
  
  // Define a callback function
  function myCallback(num: number, message: string) {
    console.log(`Number: ${num}, Message: ${message}`);
  }
  
  // Call the function with the callback
  invokeCallback(myCallback);

  
  // Question ___________________ 146


  // Define an array of numbers
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Define a callback function to filter even numbers
function filterEven(num: number): boolean {
  return num % 2 === 0;
}

// Use the .filter() method with the callback function
const evenNumbers = numbers.filter(filterEven);

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]


// Question _______________________ 147


function Mycallback(err: Error | null, result?: any) {
    if (err) {
      console.error("Error occurred:", err.message);
      // Handle the error, such as logging, throwing, or returning
    } else {
      console.log("Operation successful:", result);
      // Proceed with further processing if no error
    }
  };
  