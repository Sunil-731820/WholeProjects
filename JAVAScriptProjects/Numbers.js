
// The Use of the BigInt just putting n at the end of the Number
let x = 9999999999999999999999999999n;
console.log("the Number is "+ x);
let str1 = x.toString();
console.log("the String is "+ str1);
console.log("the length of the String is "+ str1.length);

let y = 7318205357731820535790059557585252553n;
console.log("the Number is "+ y);
let text2 = y.toString();
console.log("the String is "+ text2);
console.log("the length of the String is "+ text2.length);


// Subtrating the two String 
let x1 = "100";
let y1 = "10";
let z = x1-y1;
console.log("after the subtraction of the String is " + z);


let z1 = "1000";
let z2 = "100";
let z3 = z1-z2;
console.log("after the subtraction of the Two String is "+ z3);


// The use of the NaN

let x32 = 100/"apple";
console.log("the number is "+ x32);

let h1 = 100/"9";
console.log("after the division of the Number By String is "+ h1);

let x4 = NaN;
let y4 = 5;
let z4 = x4+y4;
console.log("after the addition of the Nan and number is " + z4);

// The Use of infinity

let myNumber = 2;

// this will execute until the infinity
while(myNumber!=Infinity){
    myNumber = myNumber*myNumber;
    console.log(myNumber);
}

// Divide the Number By Zero

let h2 = 2/0;
let h3 = -2/0;
console.log("the positive decimal value is "+ h2);
console.log("the Negative decimal is "+ h3);


// The Number as Objects

let s1 = 123;
console.log("the Number is "+ s1);
s1 = 900;
console.log("the value of the s1 is "+ s1);
let s2 = new Number(900);
console.log("after the use of the Number is "+ s2);
if(s1==s2){
    console.log("Both Are Same")
}else{
    console.log("Both Are Different");
}

// The use === 

if(s1===s2){
    console.log("Both Are Same Okay");
}else{
    console.log("Both Are Different okay");
}


// creating Both number as the Objects 

let s3 = new Number(500);
let s4 = new Number(500);
if(s3==s4){
    console.log("Both are Same its okay");
}else{
    console.log("Both are different its okay");
}

// The use === for the objects
if(s3===s4){
    console.log("Both Are Same Values alright");
}else{
    console.log("Both Are Different values alright");
}