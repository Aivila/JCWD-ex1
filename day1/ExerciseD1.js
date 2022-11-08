// Find area of rectangle
var w = 10;
var l = 30;
var area = w*l;

// Find perimeter of rectangle
var perimeter = w+l+w+l;
console.log(area)
console.log(perimeter)

// Find area of Circle
var a = 10
var d = 30
var c = 5
var diameter = 2*c
var circumference = 2*3.14*c
var circle = 3.14*25
console.log(diameter)
console.log(circumference)
console.log(circle)

// Find area of Triangle
var xAngles = 60
var yAngles = 60
var zAngles = 180 - xAngles - yAngles
console.log(zAngles)

// Difference between date in day
var date1 = new Date("01/11/2022")
var date2 = new Date("02/12/2022");
Difference_In_Time = date2.getTime() - date1.getTime();
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24)
console.log(Difference_In_Days)

//convert days to years, months and days.
let numberOfDays = 400
var years = Math.floor(numberOfDays/365);
var month = Math.floor(numberOfDays%365/30);
var days = Math.floor(numberOfDays%365 % 30);
console.log(`${years} years , ${month} month , ${days} days`)
