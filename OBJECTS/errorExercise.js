

    function sumOdd(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            sum += array[i];
         }
        else {
            throw new Error("My error");
        }
    }
    return sum;
    }


try {
console.log(sumOdd([3, 6, 11, 90]));
}
catch(error) {
    console.log(error);
}




    var a = 3;
    var b = 7;
    var c = 2;
    
try {
    if (a*b*c>0) {
        throw {
            name: "Big error",
            message: "Need to fix!"
        };
    }
    else {
        console.log("The sign is -")
    }

}
catch(error) {
    console.log(error);
}
