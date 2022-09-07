// JSON Syntax Rules
// 1 : Data is in name/value pairs
// 2 : Data is separated by commas
// 3 : Curly braces hold objects
// 4 : Square brackets hold arrays

// 1: -> JSON Data - A Name and a Value
// JSON data is written as name/value pairs, just like JavaScript object properties.

// A name/value pair consists of a field name (in double quotes), 
// followed by a colon, followed by a value:

// This is just like the Data And Value
// let = "firstname": "John";

// 2 : JSon as Objects

// {
//     "firstName": "John",
//     "lastName": "Doe"
// };


//  3 : Json Arrays

// "employees":[
//     {"firstName":"john","lastName":"doe"},
//     {"firstName":"Sunil","lastName":"Kumar"},
//     {"firstName":"harish","lastName":"kumar"}
// ];

// Converting the json text to js Objects

// the json text is :

let text1 = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

console.log("the json text is ");
console.log(text1);

// now i am going to convert using json.parse()
const obj = JSON.parse(text1);
console.log("the objects of the json after converting is ");
console.log(obj);

