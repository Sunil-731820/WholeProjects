// The use of the sort() in the arrays
const fruits = ["Banana","Orange","Apple","Mango"];
console.log("the fruits is "+ fruits);
console.log("after the use of the sort()");
console.log(fruits.sort());

// But this sort() by default sort the element or treat
// this element as the String

// The Another Array is 

const hetro = ["100","20","Sunil","harish","1"];
console.log("after the use of the sort()");
console.log(hetro.sort());

// So the Above output is not correct 
// to Avoid this we have to use compare() for sorting the Number

const point = [40,100,1,5,25,10];
console.log("the points is "+ point);

// the use of sort()
console.log(point.sort());

// to avoid this use sort(with compare())

point.sort(function(a,b){
    return a-b;
});
console.log("after true sorting of the points is ");
console.log(point);


