
/*1.	Write IIFE that replaces the first and the last element of the given array and prints out its elements. 
Input array: [4, 5, 11, 9]
Output array: [ 9, 5, 11, 4]
*/

var firstLast = (function replace(someArray) {
    var newArray = [];
    for (var i = 0; i < someArray.length; i++) {
        if (i === 0) {
            newArray[i] = someArray[someArray.length-1];
        }
        else if (i === someArray.length-1) {
            newArray[i] = someArray[0];       
        }
        else {
            newArray[i] = someArray[i];
        }
    }
    return newArray;
})([4, 5, 11, 9]);

console.log(firstLast);

/*2.	Write IIFE that calculates the surface area of the given rectangle with sides a and b. 
Input: 4 5
Output: 20 
*/

(function area(a, b) {
    return a*b;
})(4, 5);

console.log(area);

/*3.	Write IIFE that replaces all appearances of the letters m or M with * and returns the 
number of replacements. 
	Input: prograMming
	Output: progra**ing, 2
*/

var replace = (function replaceM(someString) {
    var star ="*";
    var counter = 0;;
    var newString = "";
    for (var i = 0; i < someString.length; i++) {
        if (someString[i] === "m" || someString[i] === "M") {
            newString += star;
            counter++;
        }
        else {
            newString += someString[i];
        }
    }
    return newString + ', ' + counter;
})("prograMming");

console.log(replace);

/*4.	Write a function with parameters name and surname that returns a function that suggests 
an email in the form name.surname@gmail.com. 
Input: pera peric
	Output: pera.peric@gmail.com
*/

var email = (function sugestEmail(name, surname) {
    return name + '.' + surname + '@gmail.com';
})('pera', 'peric');

console.log(email);

/*5.	Write a function that returns a function that calculates a decimal value of the given octal number. 
Input: 034
Output: 28
*/

console.log(function octalToDecimal(octalNum) {
    var string = '' + octalNum;
  
    return parseFloat(string);
}(034));

/*6.	Write a function that checks if a given string is valid password.
The password is valid if it is at least 6 characters long and contains at least one digit. 
The function should receive two callbacks named successCallback and errorCallback that should be 
called in case password is correct or invalid. 
Input: JSGuru 
Output: Your password is invalid!

	Input: JSGuru123
	Output: Your password is cool! 
*/


/*7.	Write a function that filters elements of the given array so that they satisfy a 
condition given by the callback function.
Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
Output: [11, 9, 3] 
*/


function isOdd(num) {
    if (num%2 !== 0) {
        return true;
    }
    else {
        return false;
    }
}


function filterEl(givenArray, isOdd) {
    var newArray = [];
    for (var i = 0; i < givenArray.length; i++) {
        if (isOdd(givenArray[i])) {
            newArray[newArray.length] = givenArray[i];
        }
    }
    return newArray;
}

console.log(filterEl([2, 8, 11, 4, 9, 3], isOdd));