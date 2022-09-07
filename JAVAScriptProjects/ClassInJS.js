class Cars{
    constructor(name,model){
        this.name = name;
        this.model = model;
    }

    name(){
        let name1 = "Harish Kumar Gupta";
        console.log("Your Name is "+ name1);
    }
}

let Car1 = new Cars("BMW",2000);
let car2 = new Cars("Maruti",1500);
console.log("the car1 is "+Car1);
console.log(Car1.name);
console.log(Car1.model);
console.log("the car2 is "+ car2);
console.log(car2.name);
console.log(car2.model);





