var monthNum = 23;
var January = 1;
var February = 2;
var March = 3;
var April = 4;
var May = 5;
var June = 6;
var July = 7;
var August = 8;
var September = 9;
var October = 10;
var November = 11;
var December = 12;
var isLeapYear = true;
if (monthNum == January) {
    console.log("January has 31 days.");
}
else if (!isLeapYear && February == monthNum) {
    console.log("February has 28 days.");
}
else if (isLeapYear && February == monthNum) {
    console.log("February has 29 days.");
}
else if (monthNum == March) {
    console.log("March has 31 days.");
}
else if (monthNum == April) {
    console.log("April has 30 days.");
}
else if (monthNum == May) {
    console.log("May has 31 days.");
}
else if (monthNum == June) {
    console.log("June has 30 days.");
}
else if (monthNum == July) {
    console.log("July has 31 days.");
}
else if (monthNum == August) {
    console.log("August has 31 days.");
}
else if (monthNum == September) {
    console.log("September has 30 days.");
}
else if (monthNum == October) {
    console.log("October has 31 days.");
}
else if (monthNum == November) {
    console.log("November has 30 days.");
}
else if (monthNum == December) {
    console.log("December has 31 days.");
}
else {
    console.log("This is not a month number.");
}
