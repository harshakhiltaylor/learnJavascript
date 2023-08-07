// Dates

let myDate = new Date()
console.log(myDate.toDateString());  // Mon 7 Aug 2023
console.log(myDate.toJSON());        //  2023-08-7
console.log(myDate.toLocaleString());  // 8/7/23 

// typeOf the Date in JS is Object

console.log(typeof myDate);

// month in the JS start from 0

//let anotherDate = new Date(2023,0,23);
//let anotherDate = new Date("2023-01-23"); // yy/mm/dd
let anotherDate = new Date("01-23-2023");   // mm/dd/yy
console.log(anotherDate.toDateString());

let myTimeStamp  = Date.now()

//console.log(myTimeStamp);  give value in miliseconds
//console.log(anotherDate.getTime());  // compare time in milisecond

console.log(Math.floor(Date.now()/1000));   // Value in second asked in interview

let newDate = new Date()
console.log(myDate);
console.log(myDate.getMonth() + 1); // output will be month 
console.log(myDate.getDay());   // MOnday

// `data is ${console.log(myDate.toLocaleString)} and time ${}`

// Customsize localString

newDate.toLocaleString('default', {
    weekday: "long"
})


