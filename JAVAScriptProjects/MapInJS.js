// Creating the map using map array

const fruits = new Map([
    ["apple",500],
    ["Banana",200],
    ["Oranges",300]
]);
console.log("the fruits is ");
console.log(fruits);

// 2 Creating the map using map()

const newMap = new Map();
// set() is used to add element in the set or it can also used to update the existing element
newMap.set("apple",1000);
newMap.set("Banana",100);
newMap.set("oranges",400);
console.log("the new map of the element is ");
console.log(newMap);

// the use of the get() 
console.log(newMap.get("apple"));

// the use of the size()
console.log(newMap.size);

// the use of the delete

console.log(newMap.delete("apple"));
console.log(newMap);

