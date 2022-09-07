// for in loop is used when you have the iteration of the properties an objects

const person = {
    fName:"John",
    lName:"Doe",
    age:25
};
console.log("without for In loop");
console.log(person);

// the use of the for In Loop 

for( let x in person){
    console.log("the key is ");
    console.log(x);// this will return the key only
    console.log("the values is ");
    console.log(person[x]);// this will return values    
}

// for In loop can also be used as properties of the array

const numbers = [45,4,9,25];
console.log(numbers);

for(let x in numbers){
    console.log(x);
}


// The use of for of Loop again
const person1 = ["Sunil","Harish","Arti","Suman"];
console.log("the person is "+ person1);
for(let x of person1){
    console.log(x);
}

// the use of the for In loop 
console.log("the use of the for in loop is ");
for(let y in person1){
    console.log(person1[y]);
    console.log(y);
}







