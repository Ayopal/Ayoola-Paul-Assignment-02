// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================


/**
 * Challenge - 1
 * 
 * Calculate and return the sum of the numbers in an array.
 * If you did Challenge - 1, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array of numbers to sum
 * @returns number the sum of the numbers
 */

 
function sumOfNumbers(arrayOfNumbers) {
// Logic

var sum = 0; //initialising sum to be 0
  
// Method 1: Using map
arrayOfNumbers.map(cur => sum += cur)
  
 // map loops over the array element and add up the current element to the recent sum total

  
/*
Method 2: Using forEach
arrayOfNumbers.forEach(cur => sum += cur)
 
forEach loops over each element in the array and add up the current element to the recent sum total
*/


/* 
Method 3: Using for of 
  for(const cur of arrayOfNumbers){
      sum += cur;
    }  
*/

//this returns the final sum  
return sum;

}

assignment.sumOfNumbers = sumOfNumbers;



/**
 * Challenge - 2
 * 
 * Count all even numbers within an array of numbers.
 * If you did Challenge - 2, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array containing even or non-even numbers
 * @returns number the count of even numbers
 */
function countEvenNumbers(arrayOfNumbers) {
//Logic

let count = 0;
//Method 1: for loop
for(let i = 0; i < arrayOfNumbers.length; i++){
    if(arrayOfNumbers[i]%2 === 0){
      count++;
    }
  } 

  
return count;
}
// assignment.countEvenNumbers = countEvenNumbers;



/**
 * Challenge - 3
 * 
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 * If you did Challenge - 3, remove the comment in the line just after this function
 * 
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 * 
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
 */
function celsiusToFahrenheit(arrayOfNumbers) {
//Logic
//celsiusToFahrenheit formula  °F = (°C × 9/5) + 32

const fahrenheitArray = arrayOfNumbers.map(cur => Math.trunc((cur * 9/5) + 32));
//Math.trunc remove the decimals
 
return fahrenheitArray;

}
assignment.celsiusToFahrenheit = celsiusToFahrenheit;


// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

