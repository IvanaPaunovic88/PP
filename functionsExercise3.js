//1.	Write a program to insert a string within a string at a particular position 
// (default is 1, beginning of a string).

//"My random string", "JS " -> "JS My random string"
//"My random string", "JS ", 10 -> "My random JS string"

function stringPos(arr, word, num) {
    var string = "";
    if (num === undefined) {
        num = 0;
    }

    for (var i = 0; i < arr.length; i++) {
        if (i === num){  
         string += word;
         string += arr[i];
         string += " ";
        }
        else {
         string += arr[i];
        }
    }
    return string;
}

var arr = "My random string";
var word = "JS";
var num = 3;
console.log(stringPos(arr, word, num));

//2.	Write a program to join all elements of the array into a string skipping elements 
//that are undefined, null, NaN or Infinity.

//[NaN, 0, 15, false, -22, '', undefined, 47, null]

function join(a) {
    var newString = "";
    for (var i = 0; i < a.length; i++) {
         if (isFinite (a[i]) && a[i] !== null /* isFinite zamenjuje undefined, NaN, Infinity */ ) {
            newString += a[i];
         } 
    }
    return newString;
}

var array = [NaN, 0, 15, false, -22, '', undefined, 47, null];
console.log(join(array));

/* 3.	Write a program to filter out falsy values from the array.

[NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]
*/

function falsyValues(a) {
    array = [];
    for (var i = 0; i < a.length; i++) {
        if (!!a[i]) { /*NaN || a[i] === null || a[i] === undefined || a[i] === false*/
           array[array.length] = a[i];
        }
    }
    return array;
}
var b = [NaN, 0, 15, false, -22, '', undefined, 47, null];
console.log(falsyValues(b));

/* 
4.	Write a function that reverses a number. The result must be a number.

12345 -> 54321  Output must be a number
*/

function reverse(num) {
   var string1 = "" + num;
   var string2 = "";
   for (var i = string1.length-1; 0 <= i; i--) {
       string2 += string1[i];
   }  
   return parseFloat(string2);
}

var num = 36719;
console.log(reverse(num));

/* 5.	Write a function to get the last element of an array. Passing a parameter 'n' will return 
the last 'n' elements of the array.

[7, 9, 0, -2] -> -2
[7, 9, 0, -2, 6, 8,9 ], 2 -> [0, -2] */

function last(array, n) {
    var newArray = [];
    var k = 0;               //može i bez k
    if (n === undefined) {
        newArray = array[array.length-1];
    }
    else {
    for (var i = array.length - n; i < array.length; i++) {
            newArray[k] = array[i];  //ako nema k, onda ovde pišemo samo newArray[newArray.length] = array[i];
            k++;
        }
    }
    return newArray;
}

var array = [7, 9, 0, -2, 7, 9, 0, -2];
var n = 4;
console.log(last(array,n));

/* 6. 	Write a function to create a specified number of elements with pre-filled numeric value array.

6, 0 -> [0, 0, 0, 0, 0, 0]
2, "none" -> ["none", "none"]
2 -> [null, null]
*/ 

function preFilled(num, element) {
    var result = [];
    for (var i = 0; i < num; i++) {
        if (element === undefined) {
        result[i] = null;
    }
    else {
        result[i] = element;
    }
 }
 return result;
}

var num = 2;
var element = "none";
console.log(preFilled(num, element));

/* 7.	Write a function that says whether a number is perfect.

28 -> 28 is a perfect number.

Note: According to Wikipedia: In number theory, a perfect number is a positive integer 
that is equal to the sum of its proper positive divisors, that is, the sum of its positive 
divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect 
number is a number that is half the sum of all of its positive divisors (including itself).

E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, 
and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive 
divisors: (1 + 2 + 3 + 6) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. 
This is followed by the perfect numbers 496 and 8128.

*/

function perfect(num) {
    var result = 0;
        for (var i = 0; i < num; i++) {
            if (num%i === 0) {
                 result += i;
            }
        }
    if (result === num) {
        return true;
    }
    else {
        return false;
    }
}

var num = 26;
console.log(perfect(num));


/* 8.	Write a function to find a word within a string.
'The quick brown fox', 'fox' -> "'fox' was found 1 times"
'aa bb cc dd aa', 'aa' -> "'aa' was found 2 times"
*/


function findWord(sentence, word) {
    var br = 0;
    
    for (var i = 0; i < sentence.length; i++) {
        var newWord = "";
        if (sentence[i] === word[0]) {
            for (var k = i; k < i+ word.length; k++) {
                newWord += sentence[k];
            }
            if (newWord === word) {
                br++;
            }
        }
    }
    return word + " was found " + br + " times.";
}

var sentence = "aa bb cc dd aa";
var word = "aa";
console.log(findWord(sentence, word));


/* 9. 	Write a function to hide email address.
"myemailaddress@bgit.rs" -> "mye...@bgit.rs"

*/

function hide(email) {
    var string = "";
    var stop;
    for (var i = 0; i < email.length; i++){
         if (i < 3 || i > stop) {
             string += email[i];
         }
        else if (email[i] === "@") {
             string += "...";
             string += email[i];
             stop = i;
        }
    }
    return string;
}
var email = "myemailaddress@yahoo.com"
console.log(hide(email));

/* 10.	Write a program to find the most frequent item of an array.
[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
*/

function mostFrequent(someArray) {
    var br = 1;
    var max = 1;
    var el;
    for (var i = 0; i < someArray.length; i++) {
        for ( var j = i+1; j < someArray.length; j++) {
            if (someArray[i] === someArray[j]) {
                br++;
            }
            if (br > max) {
                max = br;
                el = someArray[i];
            }
        }
        br = 1;
    }
    return 'Most frequent item of an array is ' + el + ' we can see it ' + max + ' times.';
}

var someArray = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log(mostFrequent(someArray));






