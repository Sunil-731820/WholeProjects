// The use of indexOf()
let str = "Please locate where 'locate' occurs";
console.log("the String is "+ str);
console.log("The index of the 'locate' -> " + str.indexOf("locate"));

// The USe of lastIndexOf()

let str1 = "Please locate where 'locate' occurs";
console.log("the String is" + str1);

console.log("the lastIndexOf of the String is " + str1.lastIndexOf("locate"));


// The use of the Search()

let str2 = "Please locate where 'locate' occurs";
console.log("the String is " + str2);
console.log("after the use of search() in the string is "+ str2.search("locate"));

// The Use of the match() 
let text1 = "The rain in SPAIN stays mainly in the plain";
console.log("the String is " + text1);
console.log("after the use of the match() "+ text1.match(/ain/gi));


// the use of the include() in the String
let text2 = "Hello world, welcome to the universe.";
console.log("the string is "+ text2);
console.log("after the use of the includes() ");
console.log(text2.includes("world"));

// The use of the startsWith()

let text22 = "Hello world, welcome to the universe.";
console.log("the string is " + text22);
console.log("after the use of the startWith() " + text22.startsWith("Hello"));


// The use of the endsWith()

let text33 = "John Doe";
console.log("the String is "+ text33);
console.log("after the use of the endsWith() " + text33.endsWith("Doe"));
