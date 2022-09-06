// The use of the toString()
let x = 123;
console.log("The Number is "+ x);
console.log(typeof(x));
let str1 = x.toString();
console.log("the number as the String is "+ x);
console.log("the String type is  "+ typeof(str1));

// The exaponential() method
let x1 = 9.656;
console.log("the number is "+ x1);
console.log("the exponential of the Number "+ Math.pow(x1,2));


// The Number() Method
console.log("after converting the true values into the number");
console.log(Number(true));
console.log("after converting the false values into the number ");
console.log(Number(false));

console.log("after converting the String as Number is ");
console.log(Number("10"));
console.log("after the converting space string as Number ");
console.log(Number("  10"));
console.log("after converting the string after space as the Number");
console.log(Number("10    "));
console.log("after converting the string before and after space as number");
console.log(Number("  10   "));

console.log("after converting the floating value string as the Number");
console.log(Number("10.33"));
console.log(Number("10,33"));

console.log("converting the String as the Number" );
console.log(Number("John"));

// Converting the date String as Number

console.log("after converting the string date as number ");
console.log(new Date("1970-01-01"));
console.log(new Date("2022-09-05"));


// The use of the parseInt()
console.log("after converting the negative string ");
console.log(parseInt("-10"));
console.log("after converting negative string float values into the integer is ");
console.log(parseInt("-10.33"));
console.log("parsing the string number as number");
console.log(parseInt("10"));
console.log("converting string float as int ");
console.log(parseInt("10.33"));
console.log("multiple string is ");
console.log(parseInt("10 20 30"));
console.log(parseInt("10 years"));
console.log(parseInt("years 10"));


// printing the maximum value 
let max1 = Number.MAX_VALUE;
console.log("the maximum value of the number is "+ max1);
let min1 = Number.MIN_VALUE;
console.log("The minimum Value is "+ min1);

let y1 = 6;
y1.MAX_VALUE;
console.log(y1);






