//5.	Write a program that draws a square of a given size. For example,  if the size of square is 
//      5 the program should draw: 
//      ***** 
//     *    *
//     *    *
//     *    *
//      *****

function square(num) {
    var final = "";
    var space = " ";
    var star = "*";
    var newLine = "\n";
    for (var i = 0; i < num; i++) {
        for (var j = 0; j < num; j++) {
            if (i === 0 || i === num-1 || j === 0 || j === num-1) {
                final += star;
            }
            else {
                final += space;
            }
        }
        final += newLine;
    }
    return final;
}

var a = 5;
console.log(square(a));

//6.	Write a program that draws a horizontal chart representing three given values. 
//For example, if values are 5, 3, and 7, the program should draw:
//* * * * *
//* * *
//* * * * * * *

function value(num1, num2, num3) {
    var final = "";
    var star = "*";
    var newLine = "\n";
    for (var i = 0; i < num1; i++) {
         final += star;
    }
    final += newLine;
    for (var i = 0; i < num2; i++) {
        final += star;
    }
    final += newLine;
    for (var i = 0; i < num3; i++) {
        final += star;
    }
    final += newLine;
return final;
}

console.log(value(5, 3, 7));