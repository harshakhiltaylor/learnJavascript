
// Stack (Primitive)

//creates a copy

let myYoutubeName = "Critical";
let anotherName = myYoutubeName

anotherName = "harsh";

console.log(myYoutubeName);
console.log(anotherName);

// Heap (Non Primitive)

let userOne = 
{
    email: "harsh@gmail",
    upiId: 123456
}

let userTwo = userOne;

userTwo.upiId = 123654;

console.log(userOne.upiId);
console.log(userTwo.upiId);