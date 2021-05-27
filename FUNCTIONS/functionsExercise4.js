/* 1.	Write a program that checks if a given element e is in the array a. 
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes

Input:  e = 3, a = [5, -4.2, 18, 7]
Output: no

*/

function check(array, element) {
    var answer = "no";
    for (var i = 0; i < array.length; i++) {
        if (array[i] === element) {
            answer = "yes";
            break;
        }
    }
    return answer;
}

var array = [5, -4.2, 3, 7];
var element = 5;
console.log(check(array, element));

/* 2.	Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]
*/

function sumPos(array) {
    for (var i = 0; i < array.length; i ++) {
        if (array[i] > 0) {
            array [i] *= 2;
        }
    }
    return array;
}
var array = [-3, 11, 5, 3.4, -8];
console.log(sumPos(array));

/* 3.	Write a program that finds the minimum of a given array and prints out its value and index. 
Input array: [4, 2, 2, -1, 6]
Output: -1, 3
*/

function findMin(array){
    var min = array[0];
    var index = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
            index = i;
        }
     
    }
    return "Minimum je " + min + ", a njegov index je " + index;
}

console.log(findMin([4, 2, 2, -1, -6]));

/* 4. Write a program that finds the second smallest number and prints out its value. 
Input array: [4, 2, 2, -1, 6]
Output: 2
*/

function secondSmallerst(array) {
    var min = array[0];
    var min2 = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] < min){
            min = array[i];
        } 
    }
    for (var j = 0; j < array.length; j++) {
        if (array[j] < min2 && array[j] != min){
            min2 = array[j];
        }
    }
    return min2;
}

console.log(secondSmallerst([4, 2, 2, -1, 6]));

/*5.	Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16
*/

function sumPositive(array){
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            sum += array[i];
        }
    }
    return sum;
}
console.log(sumPositive([3, 11, -5, -3, 2]));

/*6.	Write a program that checks if a given array is symmetric. An array is symmetric if it can be read 
the same way both from the left and the right hand side.   
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.

Input array: [3, 4, 12, 8]
	Output: The array isn’t symmetric.
*/

function isSymetric(array) {

    for (var i = 0, j = array.length-1; j > i ; i++, j--){ 
        //(var i = 0, j = array.length-1; i < array.length, j > 0 ; i++, j--), 
        // pa se zadaje da j>i da se ne bi niz dva puta presao kad se j i i sretnu

        if (array[i] !== array[j]) {
              return "The array is not symetric.";
        }
    }
    return "The array is symetric."
}
console.log(isSymetric([2, 5, -2, 7, -2, 4, 2]));

/*second option:

    function isSymetric(array) {
    var result = "The array is symetric.";
    for (var i = 0, j = array.length-1; j > i ; i++, j--){ 
        if (array[i] !== array[j]) {
              result = "The array is not symetric.";
              break;
        }
    }
    return result;
}
console.log(isSymetric([2, 5, -2, 7, -2, 4, 2]));
*/

/*7.	Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]
*/

function intertwineArrays(array1, array2) {
    var result = [];
    
    for (var i = 0; i < array1.length; i++) {
        result[result.length] = array1[i];
        result[result.length] = array2[i];
    }
return result;
}

var m = [4, 5, 6, 2];
var n = [3, 8, 11, 9];
console.log(intertwineArrays(m, n));


/*8.	Write a program that concatenates two arrays. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]
*/


function concat(array1, array2) {
    var result = [];

    for (var i = 0; i < array1.length; i++) {
        result[result.length] = array1[i];
    }

    for (var j = 0; j < array2.length; j++) {
        result[result.length] = array2[j];
    }

    return result;
}
var array1 = [4, 5, 6, 2];
var array2 = [3, 8, 11, 9];
console.log(concat(array1, array2));

/*9.	Write a program that deletes a given element e from the array a. 
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]
*/

function deleteEl(array, e) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] !== e) {
            result[result.length] = array[i];
        }
    }
    return result;
}

var a = [4, 6, 2, 8, 2, 2];
var e = 2;
console.log(deleteEl(a, e));

/*10.	Write a program that inserts a given element e on the given position p in the array a.
If the value of the position is greater than the array length, print the error message. 
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]
*/

function insertEl(array, e, p){
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (p > array.length) {
            result = "Error message";
        }
        else if (p === i) {
           result[result.length] = e; 
           result[result.length] = array[i]; 
        }
        else {
            result[result.length] = array[i];
        }
    }
    return result;
}

var arr = [2, -2, 33, 12, 5, 8];
var e = 78;
var p = 3;
console.log(insertEl(arr, e, p));