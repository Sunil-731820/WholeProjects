const cars = ["Volvo","BMW","Maruti" ,1];
console.log("the list of the cars is"+ cars);
// for(var car in cars){
//     console.log("The cars items are  :"+ car);
// }

console.log("the length of the cars is "+ cars.length);
console.log("after sorting the data of the array is "+ cars.sort());

const fruits = ["Banana","Orange","Apple","Mango"];
console.log("the list of the fruits is "+ fruits);
let length1 = fruits.length;
console.log("the length of the fruits is "+ length1);

// Accessing the first elemnet in the array 
const fruits1 = ["Banana","Mango","Apple","Orange"];
console.log(fruits1[0]);


// Looping the Array 

// 1 for loop
console.log("looping through the array is ")
const fruits2 = ["Banana","Orange","Apple","Mango"];
for(let i=0;i<fruits2.length;i++){
    console.log(fruits2[i]);
}

// 2 forEach loop
console.log("this is the for each loop");
cars.forEach(element => {
    console.log(element);
});

// Adding the element into the array 

const fruit3 = ["Banana","Orange","Apple"];
console.log("the fruits is "+ fruit3);
fruit3.push("Lemon");
console.log("the new array is "+ fruit3);

// Iterating the array element 
fruit3.forEach(element => {
    console.log(element);
});


// creating the array using new()
// 1 Method for array Creation
const points = new Array();

// 2 Method for the array Creations
const point1 = [];

const point2 = new Array(10,20,30,40,50,60);
console.log("the array is "+ point2);

const point3 = [1,2,3,4,5,6,7,8];
console.log("the points of the array is "+ point3);

// How to Recognise the array 

const fruits5 = ["Banana","Orange","Mango","Apple"];
console.log("fruits is "+ fruits5);
let type = typeof(fruits5);
console.log("the type is "+ type);

// to solve this is problem use Array.isArray()

const carsName = ["BMW","Volvo","Apple","Papaya"];
console.log(carsName);
console.log("the type of the array is "+ typeof(carsName));
console.log("after converting the array Objects in the aray is ");
console.log(Array.isArray(carsName));

