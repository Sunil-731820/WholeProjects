function myFunction(a,b){
    return a*b;
}

var fun1 = myFunction(10,2);
console.log("the multiplication of the two Number is"+ fun1);

// storing the function in the variable also

const x = function (a,b){
    return a+b;
};
console.log("the sum of the two Number is "+ x(1,2));


let counter = 0;
function incrementCounter(){
    counter +=1;
    console.log("counter is "+ counter);
}

incrementCounter();
incrementCounter();
incrementCounter();

// The another counter functions is 

let counter1 = 0;
function addCounter(){
    let counter1 = 0;
    counter1 +=1;
    console.log(counter1);
}

addCounter();
addCounter();
addCounter();
