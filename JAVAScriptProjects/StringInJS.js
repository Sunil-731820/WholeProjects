let text = "hello World";
console.log(text);

// String in double quatations

let Name = "Sunil Kumar Gupta";
console.log("The Name is "+ Name);

// String in single Quatations
let firstname = 'Sunil';
console.log("The first Name is "+ firstname);

// The Length of the String is 

let name1 = "Linus";
let length1 = name1.length;
console.log("The Length of the Name is "+ length1);

// String as the Objects 

let x = new String("hello");
console.log("the x is "+ x);

let str1 = "john";
let str2 = new String("john");

console.log("first String is "+ str1);
console.log("second String is "+ str2);

//  the use ==
if(str1==str2){
    console.log("Same String ");
}else{
    console.log("different String");
}

// The USe of === operator

if(str1===str2){
    console.log("same String with === equal to ")
}else{
    console.log("different String with === equal to ");
}

// new String With Same Name 

let name11 = new String("Linus");
let name22 = new String("Linus");
console.log("The First Name11 is "+ name11);
console.log("The Second Name22 is "+ name22);
// == operator in String
if(name11==name22){
    console.log("same String With new Keywords");
}else{
    console.log("Different String With new Keywords")
}

// === operator in String

if(name11===name22){
    console.log("Same String with Same Data Types With new keywords");
}else{
    console.log("Different String With Same Data Type With New keywords");
}
