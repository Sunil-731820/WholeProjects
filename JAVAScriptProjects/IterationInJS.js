// Iterating over the Array
// Iterating over the String

// 1 ) Iterating over the String

const name = "w3School";
console.log(name);
for(const x of name){
    console.log(x);
}

// 2 ) Iterating over the array 
console.log("Iterating the letters ");
const letters = ["a","b","c"];
for(const z of letters){
    console.log(z);
}

// iterating over the set 

const letters1 = new Set(["a","b","c","a"]);
console.log("the set of the letter is ");
console.log(letters1);

for(const x of letters1){
    console.log(x);

}

// iterating over the map 

const fruits = new Map([
    ["apple",500],
    ["banana",100],
    ["oranges",200]
]);
console.log("the map is "+ fruits);
for(const y of fruits){
    console.log(y);
}