const cars = ["BMW","Maruti","Mini","Volvo"];
console.log("the cars is ");
console.log(cars);

// using for Of loop 

for(let x of cars){
    console.log(x);
}

// use of for In loop

for(let y in cars){
    console.log(y); // This gives the position 
    console.log(cars[y]);
}

// looping over the string array

let language = "JavaScript";
for(let z of language){
    console.log(z);
}

// use of the for In loop
console.log("the length of the string is "+ language.length);
for(let x1 in language){
    console.log(x1);
}

