
//1.	Write a function to check whether the `input` is a string or not.

//"My random string" -> true
//12 -> false

function isString (a) {
    
    if (typeof a === "string") {
        var b = "true";
    }
    else {
        var b = "false";
    }
    return b;
}

var result = isString("My random string")
console.log(result)


//2.	Write a function to check whether a string is blank or not.

//"My random string" -> false
//" " -> true
//12 -> false
//false -> false

function isBlank (a) {
    if (a === " "){
    return true;
   }
return false
}

var a = " ";
console.log (isBlank(a))

//3.	Write a function that concatenates a given string n times (default is 1).
	//"Ha" -> "Ha"
   // "Ha", 3 -> "HaHaHa"
    
   function concat (a,b) {
       var string = " ";
       for (var i = 0; i < b; i++) {
           string += a
       }
       return string
   }
   var a = "Ha"
   var b = 5
   console.log (concat (a,b))

   //4.	Write a function to count the number of letter occurrences in a string.
//"My random string", "n" -> 2
    
   function count (a,b) {
         var letter = 0;
         for (var i = 0; i < a.length; i++) {
             if (b === a[i]) {
                 letter ++
             }
             
       }
       return letter
   }
 var a = "My random string";
 var b = "g"
 console.log (count (a,b))

 //5.	Write a function to find the position of the first occurrence of a character 
 //in a string. The result should be the position of character. 
 //If there are no occurrences of the character, the function should return -1.

 function findPos (a,b) {
     var pos = 0;
     for (var i = 0; i < a.length; i++) {
         if (b===a[i]) {
             pos = i;
        break;
         }
         else {
             pos = -1;
         }
     }
     return pos;
    
 }
 var a = "Ivana"
 var b = "a"
 console.log (findPos (a,b))

 // 6.	Write a function to find the position of the last occurrence of a character in a string. 
 //The result should be in human numeration form. If there are no occurrences of the character, function should return -1.

 function lastPos (arr,letter) {
    var pos = 0;
    for (var i = arr.length-1; i >= 0; i--) {
       if (letter === arr[i]) {
           pos = i;
       break;
       }
       else {
           pos = -1;
       }
    }
    return pos;
 }

 var a = "blablabla";
 var b = "b";
 console.log (lastPos(a,b));

 
//7. Write a function to convert string into an array. Space in a string should be represented as “null” in new array.

//"My random string" -> ["M", "y", null, "r", "a"]
//"Random" -> ["R", "a", "n", "d", "o", "m"]

function stringArray (a) {
    var array = [];
    var b = null;
    for (var i = 0; i < a.length ; i++) {
        if (a[i] === " ") {
            array[i] = b;
        }
        else {
            array[i] = a[i];
        }

    }
    return array;
}

var a = "My random string"
console.log (stringArray (a))

//8.	Write a function that accepts a number as a parameter and checks if the number is prime or not. 
//Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function isPrime(num) {
   var j = true;
    for (var i = 2; i < 50; i++) {
        if ((num % i) === 0 && num !== i) {
        j = false;
        }
    }
    return j;
}

var num = 17;
console.log(isPrime(num));


//9.	 Write a function that replaces spaces in a string with provided separator. 
//If separator is not provided, use “-” (dash) as the default separator.

//"My random string", "_" -> "My_random_string"
//"My random string", "+" -> "My+random+string"
//"My random string" -> "My-random-string"
 
function replace(arr, dash) {
    var space = " " ;
    if (dash === undefined) {
        dash = "-";
}
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === " ") {
            space += dash;
        }
        else { 
            space += arr[i];
        }
    }
    return space;
}

var arr = "My random string";
var dash = "_";
console.log (replace(arr,dash));


//10. Write a function to get the first n characters and add “...” at the end of newly created string.

function firstChar(string, n) {
    var string1 = "";
    for ( var i = 0; i < n; i++) {
        string1 += string[i];
    }
    string1 += "...";

    return string1;
}
var a = "New String"
var b = 7
console.log (firstChar(a,b))


//11.Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
//["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]

//12.	 Write a function to calculate how many years there are left until retirement based on the year of birth. 
//Retirement for men is at age of 65 and for women at age of 60. If someone is already retired, 
//a proper message should be displayed.

function retirement (birth, year, gender) {
    var retir;
    if (gender === "woman") {
        retir = 60 - (year - birth);
    }
    else if (gender === "man") {
        retir = 65 - (year - birth);
    }

    if (retir > 0) {
        return retir + " to retirement";
    }
    else {
        return "Already in retirement"
    }
}

var birth = 1946;
var year = 2021;
var gender = "woman";
console.log (retirement (birth, year, gender));

//13.	Write a function to humanize a number (formats a number to a human-readable string) with the 
//correct suffix such as 1st, 2nd, 3rd or 4th.
//1 -> 1st
//11 -> 11th

function humanize(num) {
    if (num % 100 === 11 || num % 100 === 12 || num % 100 === 13) {
       return num + "th";
    }
    else if (num % 10 === 1) {
       return num + "st";
    } 
    else if (num % 10 === 2) {
      return num + "nd";
    }
    else if (num % 10 === 3) {
       return num + "rd";
   }
    else { 
       return num + "th";
   }
}  

var num = 2021;
console.log(humanize(num));









