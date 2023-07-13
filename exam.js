/*
// Create a function that returns the sum of all even numbers from 7 to 51.
function sum_even(){
    var sum = 0;
    // Starting loop at 7 and adding 1 until 51 is reached.
    for (var number = 7; number <= 51; number++) {
        // if you forget double = you will get SyntaxError: Invalid left-hand side in assignment error.
        // if is checking that the variable is an even number
            if (number % 2 == 0) {
            //console.log(number);  // I like to see that what is returning to extra check my logic is working.
            // Add the even numbers to the sum.
            sum = number + sum;
            //console.log(sum);
    };
    } 
    console.log(sum);
 }

 sum_even();
 */

 /*
// Create a function that will return the largest value present in the array.
function largestValue(){
	var array = [-3, -55, 10, -19, 27, -6, 2, 0, -11, -4];
	var largest = array[0];
    // Starting loop at the beginning of the array until reaching the end of the length of the array.
	for (var value = 0; value < array.length; value++) {
        //console.log(array[value]); Iterating through each number and setting to variables to compare to each other.
        compare_number = array[value];
        // console.log(compare_number);
        largest = Math.max(largest, compare_number);
        //console.log(largest);
    }
    console.log(largest);
	return largest;
}

largestValue();
*/


//Create a function that will return the smallest value present in the array.
function smallestValue(){
	var array = [9, 3, -3, -9, 11, -6, 5, 10, -9, 1];
	var smallest = array[0];
    for (var value = 0; value < array.length; value++) {
        // console.log(array[value]);
        compare_value = array[value];
        //console.log(compare_value);
        smallest = Math.min(smallest, compare_value);
        //console.log(smallest);
    }
	console.log(smallest);
	return smallest; 
}

smallestValue();