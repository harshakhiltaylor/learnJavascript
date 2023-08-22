// fro loop

for (let index = 0; index < 10; index++) {
    let element = index;
    console.log(element);
    
}

// Continue word used is when we are required to skip certain keyword 

// high order array loops

const arr = [1,2,3,4,5];

for(const num of arr)
{
    //console.log(num);
}

const greetings = "Hello World!";
for(const greet of greetings)
{
    //console.log(`each char is ${greet}`);
}

// Maps 


const map = new Map();
map.set('IN',"India")
map.set('USA',"United States Of America")
map.set('FR',"France")
map.set('IN',"India")

// map - unique values , in ordered fashion 

//console.log(map);

for(const [key,value] of map)
{
    console.log(key,':-',value);
}


// objects are not iteratable in this way 


const myObject = {
    js : "javascript",
    cpp: "cplusplus",
    rb : "ruby"
}

for (const key in myObject) {
    console.log(`my ${key} is ${myObject[key]}`);  // important

}

const programming = ["java" , "javascript" , "ruby"]

for (const key in programming) {
   console.log(programming[key]);
}


