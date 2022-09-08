class Car{

    constructor(name){
        this.name = name;
    }

    static hello(){
        console.log("I am Calling the static method here");
    }
}

let myCar11 = new Car("BMW");
console.log("My Car is "+ myCar11.name);
Car.hello();//without creating the object of that class you can call the method if you are using static keyword here

Car.hello();
