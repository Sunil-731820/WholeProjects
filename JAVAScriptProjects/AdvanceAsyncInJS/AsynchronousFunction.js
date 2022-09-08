function display(sum){
    console.log("the sum of the two Number is "+ sum);
}

function myCalculator(num1 , num2, display){
    let sum = num1+num2;
    display(sum);
}

myCalculator(12,12,display);

// waiting for the time out so that function is executed


function myfunction(){
    console.log("After some time then executes");
    console.log("after some times spend by the Interpreter");
}
setTimeout(myfunction,3000);

// Waiting for the Interval 

function myfunction1(){
    let d = new Date();
    let hour1 = d.getHours();
    let minute1 = d.getMinutes();
    let second1 = d.getSeconds();

    console.log(hour1 + ":"+ minute1+":"+second1);
}

setInterval(myfunction1,1000);
