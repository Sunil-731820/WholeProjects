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

