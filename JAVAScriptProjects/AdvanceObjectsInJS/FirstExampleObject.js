// Creating a JavaScript Object
// With JavaScript, you can define and create your own objects.

// There are different ways to create new objects:

// 1 : Create a single object, using an object literal.
// 2 : Create a single object, with the keyword new.
// 3 : Define an object constructor, and then create objects of the constructed type.
// 4 : Create an object using Object.create().


// 1 : Using Literals to create the objects

let peron1 = {
    "firstName":"Sunil",
    "lastName" : "Kumar Gupta"
};
console.log("the person details is "+ peron1);
// for(let x of peron1){
//     console.log(peron1[x]);
// }

console.log(peron1.firstName);

// 2 : using Object()

const per1 = new Object();
per1.firstname = "Harish";
per1.lastname = "Kumar Gupta";
console.log("the per1 is ");
console.log(per1);
