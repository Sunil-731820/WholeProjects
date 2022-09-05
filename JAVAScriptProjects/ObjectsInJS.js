
const car  = {
    name:"BMW",
    color:"Black",
    price:12000000,
    weight : "1000Kg"
}
console.log("the car Object is " + car);
console.log("The Name of the car is "+car.name);
console.log("The color  of the car is "+car.color);
console.log("The price  of the car is "+car.price);
console.log("The wieght  of the car is "+car.weight);

const PersonDetails ={
    name:"Sunil Kumar",
    lastname : "Gupta",
    id:2000,
    
    FullNameDisplay  : function(){
        this.name + " " + this.lastname;
    }
};

console.log("The First Name is "+ PersonDetails.name);
console.log("The Last Name is "+ PersonDetails.lastname);
console.log("The Id is "+ PersonDetails.id);

WholeName = PersonDetails.FullNameDisplay();
console.log(WholeName);




