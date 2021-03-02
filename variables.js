//1. Create several variables using different letter cases and beginning characters. Check if they
//still exist if you refer to them in different case - does case matter here? Try to declare a variable
//starting with number as the first character.

var a="Milica";

var b= 2021;

if (typeof a ==="number") {
    console.log(a)

 }
else if (typeof b==="number") 
    {
        console.log(b)
    }

    else
    {
    console.log(nema)
    }

//2. Save a string (text) describing your current mood in a variable and print it out in console.
    
var raspoloženje = "Još uvek sam pospana"
console.log(raspoloženje)

// 4. Play around in the console: add, subtract, multiply and divide some numbers. Use numbers
//stored in variables you created as well. Think about expressions: 3-2-31, 3*5-7/3, 4/2-1.14*3.
//Why do we get these results?

    var a = 3;
var b = 5;
var c = 7;
var d = 31;
var e = 4;
var f = 2;
var g = 1.4;

var result1 = a-f-d
console.log(result1);

var result2 = a*b-c/a;
console.log (result2);

var result3 = e/f-g*a
console.log(result3)

//5.How many grams weight 1.2kg of bananas?

var a = 1.2 
var b = a*1000

console.log(b)

var bananakg=1.2
var gram=1000
var bananagram = bananakg * gram

console.log(bananakg + "iznosi" + bananagram)

//6. How many extra seconds we wait for our friend Anna who is being late for 5 minutes? 
//What about Tom who is being late half an hour? It is hard to be on time these days…

var Anam = 5
var Anasekunde = Anam*60
console.log("Ana is late for 5 minutes, that is " + Anasekunde + " seconds")

var Tomh = 1.5
var Tomm = Tomh*60
var Toms = Tomh*60
console.log("Tom is late for 1.5 hours, that is " + Toms + " seconds")

//9.Do you know any other way to write a = a * 2? How about: b = b + 3; c = c / 5; d = d - 7?

var a = 1;
var b = 2;
var c = 3;
   console.log (b=b+3)

//10. Create the following variables:
//- a variable containing your name,
//- a variable containing your age,
//- a variable describing if you have a cat or not.
//* Each variable has to start with a different type of character.
//Print them all out in the console and check their types.
  
var a = "Ivana"
var b = 32
var c = false

console.log (a + b + c)
console.log (typeof a)
console.log (typeof b)
console.log (typeof c)

//11. Check which type are these values:
//- “number”
//- true
//- null
//- “false”
//- 56

var a = 2
var b = "name"
var c = ""
var d = false
var e = 0

console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
console.log(typeof d)
console.log(typeof e)

//13 Use the console to check the results you think should go in the following table:

//p q          p &amp;&amp; q       p || q
//true true
//true false
//false true
//false false

var p= true;
var q= true;
console.log(p&&q)
console.log(p||q)

var p= true;
var q= false;
console.log(p&&q)
console.log(p||q)

var p= false;
var q= true;
console.log(p&&q)
console.log(p||q)

var p= false;
var q= false;
console.log(p&&q)
console.log(p||q)

//14. If the variable age stores the information about user’s age, how we can check whether it contains 
//a correct value? Write expressions for checking:
//●	Is age negative value
//●	Is age greater than 120 

var age = 65
console.log(age<0)
console.log(age>120)


//15. Let’s say there are speed limitations on a motorway from 60 to 120 kilometers per hour. 
//If we store the current speed value in the variable speed. Write an expression which will check 
//if we are driving drive safely or not? (true if we are driving safe and false if not)   

var speed = 50
console.log(speed>=60 && speed <=120)