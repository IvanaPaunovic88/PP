/* 1.	Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u 
as well as A, E, I, O, and U. 
*/

function countVowels(someStr) {
    var counter = 0;

    for (var i = 0; i < someStr.length; i++) {
        if (someStr[i] === "A" || someStr[i] === "a" ||
            someStr[i] === "E" || someStr[i] === "e" ||
            someStr[i] === "I" || someStr[i] === "i" ||
            someStr[i] === "O" || someStr[i] === "o" ||
            someStr[i] === "U" || someStr[i] === "u") {
        counter ++;
        }
    }
    return counter;
}
var someStr = "IVANA voli da jede kolače.";
console.log(countVowels(someStr));

/* 2.	Write a function that combines two arrays by alternatingly taking elements.

[‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]

*/

function combineArrays(letters, numbers) {
    var combination = [];
    for (var i = 0; i < letters.length; i++) {
            combination[combination.length] = letters[i];
            combination[combination.length] = numbers[i];
        }
    return combination;
}
var letters = ["a","b","c",'d'];
var numbers = [1, 2, 3];
console.log(combineArrays(letters, numbers));

/*3.	Write a function that rotates a list by k elements.

For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]
*/

function rotate(someArray, k) {
    newArray = [];
    for (var i = 0; i < someArray.length; i++) {
        if (i >= k) {
            newArray[newArray.length] = someArray[i];
        }
    }
    for (var i = 0; i < someArray.length; i++) {
        if (i < k) {
            newArray[newArray.length] = someArray[i];
        }
    }
    return newArray;
}
console.log(rotate([1,2,3,4,5,6,7,8,9], 4));


/*4.	Write a function that takes a number and returns array of its digits.
*/

function numToArray(num) {
    var numStr = "" + num;
    var resultArr = [];
    for (var i = 0; i < numStr.length; i++) {
        resultArr[resultArr.length] = numStr[i];
    }
    return resultArr;
}

var num = 56789;
console.log(numToArray(num));

/*5.	Write a program that prints a multiplication table for numbers up to 12.
*/

function multiTable(num) {
    var result;
    for (var i = 1; i <= num; i++) {
        for (var j = 1; j <= num; j++) {
           result = i * j + " ";
           console.log(result);
        }
    }
    return result;
}

var num = 12;
console.log(multiTable(num));

/* 6.	Write a function to input temperature in Centigrade and convert to Fahrenheit.
*/

function convertCtoF(tempC){
    var tempF = (tempC * 1.8) + 32;
    return tempF;
}

console.log(convertCtoF(22));

/*7.	Write a function to find the maximum element in array of numbers. 
Filter out all non-number elements.
*/

function findMax(someArr) {
    var newArr = [];

    for (var i = 0; i < someArr.length; i++) {
        if (typeof someArr[i] === "number") {
            newArr[newArr.length] = someArr[i];
        }
    }
    var max = newArr[0];
    for (var j = 0; j < newArr.length; j++) {
         if (newArr[j] > max) {
             max = newArr[j];
         }
    }
    return max;
}
var someArr = [2, 66, 444, 113, "ivana", 89];
console.log(findMax(someArr));

/*8.	Write a function to find the maximum and minimum elements. Function returns an array.
*/

function findMinfindMax(someArr) {
    var min = someArr[0];
    var max = someArr[0];
    var newArr = [];
    for (var i = 0; i < someArr.length; i++) {
        if (someArr[i] > max) {
            max = someArr[i];
        }
    }
    for (var j = 0; j < someArr.length; j++) {
        if (someArr[j] < min) {
            min = someArr[j];

        }
    }
    newArr[newArr.length] = max;
    newArr[newArr.length] = min;
    return newArr;

}
var someArr = [3, 56, 9, 34, 123, 978, 4, 1];
console.log(findMinfindMax(someArr));

/*9.	Write a function to find the median element of array. 
Note: If an array is sorted, median is the middle element of an array in case 
of odd number of elements in an array and when number of elements in an array 
is even than it will be an average of two middle elements.
*/

function findMedian(someArr) {
    var result = 0;
    for (var i = 0; i < someArr.length; i++) {
         if (someArr.length % 2 !== 0) {
             result = someArr[(someArr.length/2) - 0.5];
        }
        else {
             result = (someArr[someArr.length/2 - 1] + someArr[(someArr.length/2)]) / 2;
        }
    }
    return result;
}
var someArr = [1,2,30,7,4,5,6];
console.log(findMedian(someArr));

/*10.	Write a function to find the element that occurs most frequently.
*/

function mostFrequent(someArr) {
    var counter = 1;
    var max = 1;
    var el;
    for (var i = 0; i < someArr.length; i++) {
        for (var j = i + 1; j < someArr.length; j++) {
            if (someArr[i] === someArr[j]) {
                counter++;
            }
            if (counter > max) {
                max = counter;
                el = someArr[i];
            }
        }
        counter = 1;
    }
    return 'Most frequent item of an array is ' + el + ' we can see it ' + max + ' times.';
}

var someArr = [9, 3 , 5 , 1 , 2 , 1 , 2 , 1, 4 , 1 , 5 , 1];
console.log(mostFrequent(someArr));

/* 11.	Write a function to find and return the first, middle and last element of an array 
if the array has odd number of elements. If number of elements is even, return just the first 
and the last. In other cases (empty array), input array should be returned.
*/

function firstMiddleLast(someArr) {
    var newResult = [];
    var middle;
        if (someArr.length % 2 !== 0) {
            middle = someArr[(someArr.length / 2) - 0.5];
            newResult[newResult.length] = someArr[0];
            newResult[newResult.length] = middle;
            newResult[newResult.length] = someArr[someArr.length-1];
        }
        else {
            newResult[newResult.length] = someArr[0];
            newResult[newResult.length] = someArr[someArr.length-1];
        }
    return newResult;
}

var someArr = [2, 4, 7, 14, 78, 03, 66];
console.log(firstMiddleLast(someArr));

/*12.	Write a function to find the average of N elements. 
Make the function flexible to receive dynamic number or parameters.
*/

function average(n) {
    var sum = 0;
    for (var i = 0; i < n.length; i++) {
        sum += n[i];
    }
 return sum / n.length;   
}

console.log(average([2, 66, 3, 1, 8, 7]));

/*13.	Write a function to find all the numbers greater than the average.
*/

function greaterThanAverage(givenArray) {
    var sum = 0;
    var result;
    var newResult = [];
    for (var i = 0; i < givenArray.length; i++) {
        sum += givenArray[i];
    }
    result = sum / givenArray.length;

    for (var j = 0; j < givenArray.length; j++) {
        if (givenArray[j] > result) {
            newResult[newResult.length] = givenArray[j];
        }
    }
    return newResult;
}

console.log(greaterThanAverage([2, 66, 3, 1, 2, 34]));

/*
14.	The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the square of the height (in meters). 
Write a function that takes two parameters, weight and height, computes the BMI, and prints the corresponding BMI category:
●	Starvation: less than 15
●	Anorexic: less than 17.5
●	Underweight: less than 18.5
●	Ideal: greater than or equal to 18.5 but less than 25
●	Overweight: greater than or equal to 25 but less than 30
●	Obese: greater than or equal to 30 but less than 40
●	Morbidly obese: greater than or equal to 40
*/

function bodyMassIndex(weight, height) {
    var result = "";
    var bmi = weight / (height*height);
    if (bmi < 15) {
        result += "Starvation";
    }
    else if (bmi >= 15 && bmi < 17.5) {
        result += "Anorexic";
    }
    else if (bmi >= 17.5 && bmi < 18.5) {
        result += "Underweight";
    }
    else if (bmi >= 18.5 && bmi < 25) {
        result += "Ideal";
    }
    else if (bmi >= 25 && bmi < 30) {
        result += "Overweight";
    }
    else if (bmi >= 30 && bmi < 40) {
        result += "Obese";
    }
    else if (bmi >= 40) {
        result += "Morbidly obese";
    }
    return result;
}

console.log(bodyMassIndex(67, 1.70));

