
function myCalculator(num1,num2){
    let sum = num1+num2;
    return sum;
}

function display(res){
    console.log("the sum is "+ res);
}

let res = myCalculator(10,12);
display(res);

// Another example is 


function sum(num11 , num22){
    let sum1 = num11 + num22;
    return sum1;
}

function sub(num111 , num222){
    let sub = num111-num222;
    return sub;
}

function mult(num1111,num2222){
    let mul = num1111*num2222;
    return mul;
}

function displayResult(output){
    console.log("the output is "+ output);
}

let sum1 = sum(100,100);
displayResult(sum1);
let sub1 = sub(200,100);
displayResult(sub1);
let mul1 = mult(10,1000);
displayResult(mul1);
