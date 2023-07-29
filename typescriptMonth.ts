let monthNum: number=23 ;

let January: number=1 ;
let February: number=2;
let March:number=3;
let April:number=4;
let May:number=5;
let June:number=6;
let July:number=7;
let August:number=8;
let September:number=9;
let October:number=10;
let November:number=11;
let December:number=12;

let isLeapYear : boolean = true; 

if(monthNum==January) {
    console.log ("January has 31 days.");
}
else if(!isLeapYear && February==monthNum) {
    console.log ("February has 28 days.");
}
else if(isLeapYear && February==monthNum){
    console.log("February has 29 days.");
}
else if(monthNum==March) {
    console.log ("March has 31 days.");
}
else if(monthNum==April) {
    console.log ("April has 30 days.");
}
else if(monthNum==May) {
    console.log ("May has 31 days.");
}
else if(monthNum==June) {
    console.log ("June has 30 days.");
} 
else if (monthNum==July) {
    console.log ("July has 31 days.");
}
else if (monthNum==August) {
    console.log ("August has 31 days.");
} 
else if (monthNum==September) {
    console.log ("September has 30 days.");
}
else if (monthNum==October) {
    console.log ("October has 31 days.");
} 
else if (monthNum==November) {
    console.log ("November has 30 days.");
}
else if (monthNum==December) {
    console.log ("December has 31 days.");
}
else {
    console.log ("This is not a month number.");
}