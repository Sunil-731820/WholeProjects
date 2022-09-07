const person = {
    firstName : "john",
    lastName : "Doe",
    id : 556,
    fullName : function(){
        return this.firstName+ " "+ this.lastName;
    }
};

console.log(person.fullName());
console.log(person.firstName);
console.log(person.lastName);
console.log(person.id);


