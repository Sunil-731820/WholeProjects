// Creating the Date in first ways
// 1  Using new Date() constructor() 
// Creating the Date in fours ways 
// 2 using Date(year, month, day, hours , minutes,seconds,miliseconds)
// Creating the Date in fours ways 
// 3 using new Date(miliseconds)
// Creating the Date in fours ways
// 4  using new Date(date String) 
const d = new Date();
console.log("the date is "+ d);

// date as String 

const date1 = new Date("October 13 , 2022 11:52:12:00");
console.log(date1);

// The use of the toDateString()
console.log("after the use of the toDateString()");

const d1 = new Date();
d1.toDateString();
console.log("the Date is "+ d1);

