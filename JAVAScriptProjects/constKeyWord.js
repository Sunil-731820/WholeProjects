const pie = 3.14;
console.log("the Value of the pie is "+ pie);

// Increment by 10 in pie value
// pie = pie+10;
// console.log("Again the value of the pie is "+pie);

// The USe of the const

// 1 : -> The Array of const

const cars = ["volvo","Saab","BMW"];
console.log("the Cars Array is ");
console.log(cars);

// You can change the element 
cars[0] = "Toyota";
console.log("the new car Array is "+ cars);

// You can add the element 
cars.push("harrier");
console.log("the car Array is "+ cars);


// Redeclaring the cars array 

// cars = ["name","id","address"];
// console.log(cars);

// Constant Objects 

// you can create the const objects 

const car = {
    type:"fiate",
    model:"500",
    color:"white"
};
console.log("the car object is "+ car);
console.log("the Type of the car   is "+ car.type);
console.log("the Model is "+ car.model);
console.log("the color of the car is "+ car.color);

// You can change the property 
car.color = "red";
console.log(car);


// You can add the property 
car.owner = "harish Kumar Gupta";
console.log("the owner of the car is "+ car);
console.log("the owner of the car is : "+ car.owner);



