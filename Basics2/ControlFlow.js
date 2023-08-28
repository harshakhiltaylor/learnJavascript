// JS execution context

// Global EC
// FUnction EC
// Evaluation EC

// memory creation phase
// execution phase

//  Control Flow

//  IF 

if(2 == "2")
{
    console.log("Executed"); // code will run 
}

// < > <= >= == ===

const score = 201;
 
if(score < 100)
{
    console.log("Score is not good");
}
else if (score == 200)
{
    console.log("Target is 250");
}
else{
    console.log("Probablity to win matches");
}


const userLoggedIn = true;
const haveDebitCard = true;

if(userLoggedIn && haveDebitCard)
{
    console.log("Bank can pay its price");
}

const userEmail = "harsh@gmail.com";

if(userEmail)
{
    console.log(userEmail);
}
else
{
    console.log("Email not  found");
}

// false values

// false , 0 , -0, "" , null , undefined , BigInt 0n , NaN

// Truthy Values 

// "0" , 'false' , " " , [] , {} , function(){}

// HOw to check array if it is empty

const array1 = []

if(array1.length === 0)
{
    console.log("Given Array is Empty");
}
else
{
    console.log("Given Array is not Empty");
}

// How to check whether object is empty or not 

const emptyObj = {}

if(Object.keys(emptyObj).length === 0)
{
    console.log("Object is empty");
}

// Nullish coalescing operator (??) // null undefined

let variable1;

// variable1 = 5 ?? 10;   // 5
// variable1 = null ?? 10;   // agar null value aayi to uski safety check karta hai 

variable1 = undefined ?? 15;  // 15
// variable1 = null ?? 10 ?? 20 // 20

console.log(variable1);


// terniary operator 

// condition ? true : false


const iceTeaPRice = 100;

iceTeaPRice >= 80 ? console.log("price is high") : console.log("price not high");