const score = 10 
const bal = new Number(10.02)
// toFixed(x) = fixes the precision of decimal numbers
// console.log(bal.toFixed(1));

//toPrecision(s) = returns a string with value rounded off to 's' significant digits.
// console.log(12.49.toPrecision(2));

//toLocaleString('en-IN') = converts number intro string with commas


//Math.round(num) = Round off a number 
//Math.ceil() , Math.floor() ,Math.sqrt(), Math.pow(), Math.min(array), Math.max(array)

//Math.random() = between 0 and 1 (inclusive.)

const min = 10
const max = 20
//formula for specific range
//Math.random*(max-min+1)+min

//dates
let PresDate = new Date()
// console.log(PresDate.toISOString());
let Stamp = Date.now()

// console.log(Stamp);
// Time in seconds

console.log(Math.floor(Stamp/1000));

let MyCreatedDate = new Date("15-05-2023")

//customisation
MyCreatedDate.toLocaleString('default',{
    month: "long"
})





