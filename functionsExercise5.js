/*1.	Find the min and max element in the following array and switch their places. 
Print out the modified array in the console.
Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]
*/

function switchMinMax(someArray) {
    var min = someArray[0];
    var max = someArray[0];
    var tempMin = 0;
    var tempMax = 0;
    for (var i = 0; i < someArray.length; i++) {
        if (someArray[i] < min) {
             min = someArray[i];
             tempMin = i;
        }
    }
    for (var j = 0; j < someArray.length; j++) {
        if (someArray[j] > max) {
            max = someArray[j];
            tempMax = j;
        }
    }
    someArray[tempMin] = max;
    someArray[tempMax] = min;

    for (var k = 0; k < someArray.length; k++) {
        if (k === tempMax) {
            someArray[k] = min;
        }
        if (k=== tempMin) {
            someArray[k] = max;
        }
    }
    return someArray;
}

var someArray = [ 3, 500, 12, 149, 53, 414, 1, 19 ];
console.log(switchMinMax(someArray));

/*2.	Use the following array to make a new one by dividing its values by two and adding 5. 
If a given element's value is 0, change it to 20.
Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]
*/

function divideAndAdd(someArray) {
    var result = [];
    for (var i = 0; i < someArray.length; i++) {
        result[result.length] = (someArray[i] / 2) + 5;
        if (result[i] === 0) {
            result[i] = 20;
        }
    }
    return result;
}

var someArray = [ 3, 500, -10, 149, 53, 414, 1, 19 ];
console.log(divideAndAdd(someArray));

/*3.	Initialize two arrays. The first one should contain student names, the second one the number 
of points for each student. Display students' names with their corresponding grade. Use the following ranges:
51-60 -> 6,
61-70 -> 7,
71-80 -> 8,
81-90 -> 9,
91-100 -> 10.
Input: 
[ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
Output: 
Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.
*/

function corrGrade(students, points) {
    var result ="";

    for (var i = 0; i < students.length; i++) {
        var grade = 0;
        if (points[i] < 51) {
           grade = 5;
        }
        else if (51 <= points[i] && points[i] <= 60) {
            grade = 6;
        }
        else if (61 <= points[i] && points[i] <= 70) {
            grade = 7;
        }
        else if (71 <= points[i] && points[i] <= 80) {
            grade = 8;
        }
        else if (81 <= points[i] && points[i] <= 90) {
            grade = 9;
        }
        else if (91 <= points[i] && points[i] <= 100) {
            grade = 10;
        }

        if (grade === 5) {
        result += students[i] +" acuired " + points[i] + " points and failed to comlete the exam.\n";
        }
        else {
        result += students[i] +" acuired " + points[i] + " and earned " + grade + "\n";
        }
    }
    return result;
}

var students = [ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ];
var points = [ 50, 39, 63, 72, 99, 51, 83, 59 ];
console.log(corrGrade(students, points));


/*6.	Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts all the 
odd numbers 1 to 500 from the calculated sum. The result should then be multiplied by 12.5 and displayed in console.
Output: 2350000
*/

function sumOddEvenMulti(){
    var sumEven = 0;
    var sumOdd = 0;
    for (var i = 0; i <= 1000; i++) {
        if (i % 2 === 0) {
           sumEven += i;
        }
        else if (i % 2 !== 0 && i <= 500) {
            sumOdd += i;
        }
    }
return (sumEven - sumOdd) * 12.5;
}

console.log(sumOddEvenMulti());

/*7.	Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) 
in the array and create a new string from them. Print it out in the console.
Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]

Output: AnStJoJoDaMa
*/

function firstTwoLettersStr(someArray) {
    var newStr = "";
    for (var i = 0; i < someArray.length; i++) {
        for (var j = 0; j < someArray[i].length; j++) {
            if (someArray[i].length >= 2 && j < 2) {
                newStr += someArray[i][j];
            }
        }
    }
    return newStr;
}
var someArray = [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ];
console.log(firstTwoLettersStr(someArray));

/*8.	Write a program that takes a string and prints its characters out in reversed order in the console.
Input:  Belgrade Institute of Technology
Output: ygolonhceT fo etutitsnI edargleB
*/

function reverseOrder(someStr) {
    var newStr = "";
    for (var i = someStr.length - 1 ; i >= 0; i--)  {
        newStr += someStr[i];
    }
    return newStr;
}
console.log(reverseOrder('Belgrade Institute of Technology'));

/*9.	Write a program that displays all the combinations of two numbers between 1 and 7. 
Don't display two of the same numbers at the same time. Display the number of possible combinations, as well. 
(E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).
*/

function allCombinations(num) {
    var result = "";
    for (var i = 1; i <= num; i++) {
        for (var j = i+1; j <= num; j++) {
            result += "(" + i + "." + j + ") ";
        }
    }
    return result;
}

var num = 7;
console.log(allCombinations(num));



/*10.	Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).
Input:  17    | 15
Output: true  | false
*/

function isPrime(num) {
    var result = "true";
    for (var i = 2; i <= num; i++) {
        if (num % i === 0 && num !== i) {
              result = "false";
        }
    }
    return result;
}

var num = 13;
console.log(isPrime(num));

/*11.	Check if a given string is a palindrome (spaces are ignored).
Input:  eye  | Geek  | a nut for a jar of tuna
Output: true | false | true
*/

function isPalindrome(someStr) {
    var strWithoutSpace = "";
    for (var i = 0; i < someStr.length; i++) {
        if (someStr[i] !== " ") {
            strWithoutSpace += someStr[i];
        }
    }
    var result = "true";
    for (var i = 0, j = strWithoutSpace.length - 1; j > i; i++, j--) {
        if (strWithoutSpace[i] !== strWithoutSpace[j]) {
            result = "false";
        }
    }
    return result;
}
var someStr = "a nut for a jar of tuna";
console.log(isPalindrome(someStr));

/*12.	Write a program that calculates the greatest common divisor of two integers. 
Note:  of two non-zero integers is the greatest positive number 
that divides both numbers with no remainder.
Input:  192 42 | 81 9
Output: 6      | 9
*/

function greatestCommonDivisor(int1, int2) {
    var result = 0;
    for (var i = 1; i <= int1 && i <= int2; i++) {
        if (int1 % i === 0 && int2 % i === 0) {
           result = i;
        }
    }
    return result;
}
var int1 = 81;
var int2 = 9;
console.log(greatestCommonDivisor(int1, int2));