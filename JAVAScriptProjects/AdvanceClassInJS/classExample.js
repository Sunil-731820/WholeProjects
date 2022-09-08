class Car{
    constructor(name , year){
        this.name = name;
        this.year = year;
    }
    // avoiding using the function keyword here because you are creating the method not functions
     Hello() {
        console.log("Hello Method calling ");
    }

    Hi(){
        console.log("Hi Method Calling you");
    }
}

// creating the object of that class
let car1 = new Car("BMW",2015);
let car2 = new Car("volvo",2022);
console.log("the First Car is "+car1);
console.log("the second Car is "+ car2);
car1.Hello();
car1.Hi();

console.log("the name of the car is "+ car1.name+ " "+ "year is "+ car1.year);
