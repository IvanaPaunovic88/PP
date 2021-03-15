//LOOP 1
//1.	Write a program that will iterate from 0 to 10 and display squares of numbers

for (var i = 0; i <= 10; i++) {
     
    console.log(i*i)
}

//2.	Write a for loop that will iterate from 0 to 15. For each iteration, it will check 
//if the current number is odd or even, and display a message to the screen.

for (i = 0; i < 15; i++){
   if (i % 2===0) {
       console.log("number is even")
    }
   else 
    console.log("number is odd")
 
}

/*2.	Write a program to sum the multiples of 3 and 5 under 1000.*/


var sum = 0
for (i = 0; i < 1000; i++) {
    if (i % 3 === 0 && i % 5 === 0)
     sum += i
}
console.log(i)

/*  3.	Write a program to compute the sum and product of an array of integers.*/

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var sum = 0
var prod = 1

   for (i = 0; i < array.length; i++) {
    sum += array[i]

   }
   console.log (sum)

   for (i = 0; i < array.length; i++) {
     prod = prod * array[i]
   }
   console.log (prod)

/*4.	Write a program which prints the elements of the following array as a single string.
   var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined]*/

   var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined]
   var string = ' '

   for (i = 0; i < x.length; i++) {
        string += x[i]
   }
   console.log ("'"+string+"'")

 /*5.	Write a program that prints the elements of the following array.

var a = [
[1, 2, 1, 24], 
[8, 11, 9, 4], 
[7, 0, 7, 27]
];


var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27]];
var sum = a[0]
for (i = 1; i < a.length; i++) {
     sum += a[i]}
     console.log (sum) //nije tačan*/


//6.	Write a program that outputs the sum of squares of the first 20 numbers. 

var sum = 0

for (i = 0; i < 20; i++) {
    sum = sum + i*i
}
console.log (sum)

/* 7.	Write a program that computes average marks of the following students. Then use this average to determine the corresponding grade. 
	
David	80
Marko	77
Dany	88
John	95
Thomas	68

The grades are computed as follows :

< 60%	F
< 70%	D
< 80%	C
< 90%	B
< 100%	A
*/

var array = [80, 77, 88, 95, 68]
var sum = 0


for (i = 0; i < array.length; i++){
    sum += array[i];
}

var average = sum/5

    if (average < 100 && average > 90) {
       console.log ("Prosečna ocena je A")
    }
    else if (average < 90 && average > 80) {
       console.log ("Prosečna ocena je B")
    }
    else if (average < 80 && average > 70) {
       console.log ("Prosečna ocena je C")
    }
    else if (average < 70 && average > 60) {
       console.log ("Prosečna ocena je D")
    }
    else if (average < 60 ) {
        console.log ("Prosečna ocena je F")     
    
    }  