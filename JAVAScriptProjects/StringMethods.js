let text1 = "hello";
console.log("the length of the String is "+ text1.length);

// Extracting the String 

// 1) Slice(start , end)
// 2) subString(start , end)
// 3) subStr(start, length)

// 1) The USe of the Slice(start , end)

let str = "Apple, Banana, Kiwi";
console.log("extracting the string from 7 to 11");
console.log(str.slice(7,11));

// again the use of slice()

let str1 = "Apple, Banana, Kiwi";
let parts = str1.slice(-12,-6);
console.log("the sclicing parts is "+ parts);

// The use of the substring(start , end)

let str12 = "Apple, Banana, Kiwi";
console.log("The String is "+ str12);
let parts1 = str12.substring(7,13);
console.log("The SubString is parts2 is  " + parts1);

console.log("again the subString is "+ str12.substr(-4));


// The Use of the Replace()

let str3 = "Please  visit to Microsoft";
console.log("the string is "+ str3);
let newText = str3.replace("Microsoft","Google");
console.log("the new String is "+ newText);

// The use /Microsoft/g i.e it will global override Or replace

let str4 = "Please visit Microsoft and Microsoft";
console.log("the String is "+ str4);
let newtext1 = str4.replace(/Microsoft/g,"GeeksforGeeks");
console.log("the new String is "+ newtext1);

// The use of the toUpper()

let text11 = "hello world";
console.log("the string is "+ text11);
let upperText = text11.toUpperCase();
console.log("the Upper case is "+ upperText);

// The use of the lowerCase()

let text21 = "HELLO LINUS";
console.log("the text is "+ text21);
let lowerText = text21.toLowerCase();
console.log("the string is " + lowerText);

// The Use of the concate()
let text41 = "Hello";
let text42 = "Sunil";
let text43 = text41.concat(" " ,text42);
console.log("the text4 is "+ text43);

// The Use of the trim()

let text33 = "           Hello Sunil";
console.log("the String is " + text33);
let text44 = text33.trim();
console.log("after the use of the trim()" + text44);

// The use of the trimStart()
let text51 = "          Hello World!              ";
console.log("the string is "+ text51);
let trimString = text51.trimStart();
console.log("the String is "+ trimString);

// The use of charAt()
let text61 = "Hello World";
let char = text61.charAt(0);
console.log("the character at the index 0 is "+ char);

// The use of the toString()
let num = 5;
console.log("the Number is "+ num);
console.log("the type of the Number is "+ typeof(num));
let text71 = num.toString();
console.log("the String is "+ text71);
console.log("the type of the String is "+ typeof(text71));

