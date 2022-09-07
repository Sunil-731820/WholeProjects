const letter = new Set(["a","b","c","a"]);
console.log("the letter of the set is "+ letter);
for(const d of letter){
    console.log(d);
}

// again creating the set is 

const set1 = new Set();
set1.add("sunil");
set1.add("Harish");
set1.add("arti");
set1.add("sunil");
console.log("set is "+ set1);

for(const j of set1){
    console.log(j);
}

console.log("printing the value of the all set is ");
console.log(set1.values());

