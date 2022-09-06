const d = new Date();
// The use of getTime()
d.getTime();
console.log("The time is "+ d);

const d1 = new Date();
// The use of getFullyear()
d1.getFullYear();
console.log("The Full year is "+ d1);

const d2 = new Date();
// The use of getMonth()
d2.getMonth();
console.log("the month is "+ d2);

// creating the array of month
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const d5 = new Date();
console.log(months.getMonth);
let month = months[d5.getMonth()];
console.log("the Month is "+ month);

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const d6 = new Date();
console.log(days[d6.getDay()]);



