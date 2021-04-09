//0.	Write a program that calculates  two given numbers.

function addNumber (a , b) {
var result = a + b;
return result;
}

var m = 4;
var n = 5;
var result = addNumber (m , n);

console.log(result);

//1.	Write a program that calculates the maximum of two given numbers. 

function max (a,b) {
  if (a>b) {
      return a;
    }
  else if (b>a) {
      return b;
    }
  else {
      return ("numbers are equal");
    }
  }
  
  var a = 1;
  var b = 2;
  var result = max (a,b);

  console.log (result);
  
  //2.	Write a program that checks if a given number is odd.

  function oddeven (a) {
    if (a % 2 === 0) {
      return ("number is even");
    }
    else {
      return ("number is odd");
    }
  }
   
  var a = 16;
  var result = oddeven (a);
  
  console.log (result);

  //3.	Write a program that checks if a given number is a three digit long number.

  function threeDig (a) {
    if (100 <= a && a < 1000) {
        return ("Number is three digit long number");
    }
    else {
        return ("Number is not three digit long number");
    }
  }

  var a = 4560;
  var result = threeDig (a);
  console.log (result);

  //4.	Write a program that calculates an arithmetic mean of four numbers.

  function arithMean (array) {
    var sum = 0
    for (i = 0; i < array.length; i++) {
        sum += array [i];
    }
    return sum / array.length;
  }

  var array = [1, 5, 7, 33];
  console.log (arithMean (array));

  //7.	Write a program that calculates a number of digits of a given number. 
  
  function CalcOfNumber (number) {
      var string = "" + number;
      return string.length;
  }
    var number = 12345;
    console.log (CalcOfNumber (number));


  //8.	Write a program that calculates a number of appearances of a given number in a given array.
 //Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
 //Result: 3
 
 function calcNum (array) {
     var keep = 0;
     for (var i = 0; i < array.length; i++) {
          if (e === array[i]) {
            keep = keep + 1;
          }
        }
      return keep;
    }
    var array = [3, 5, 7, 8, 7, 9, 1];
    var e = 7;
    console.log (calcNum (array));  


//9.	Write a program that calculates the sum of odd elements of a given array. 


function sumOdd(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            sum += array[i];
         }
    }
    return sum;
}

var array = [3, 6, 11, 90];
console.log(sumOdd(array));

//10.	Write a program that calculates the number of appearances of a letter a in a given string. 
//Modify the program so it calculates the number of both letters a and A.

function letter(string) {
  sum = 0;
  for (var i = 0; i < string.length; i++){
     if (string[i] === "a" || string[i] === "A"){
        sum++;
    }
  }
  return sum;
}

var someString = "Slatka pAvlaka";
console.log(letter(someString));

//11.	Write a program that concatenates a given string given number of times. For example, 
//if “abc” and 4 are given values, the program prints out abcabcabcabc. 

function concat(someString, num) {
  var newString = "";
  for (var i = 0; i < num; i++) {
      newString += someString;
  }
  return newString;
}

var someString = "abc";
var num = 4;
console.log(concat(someString, num));