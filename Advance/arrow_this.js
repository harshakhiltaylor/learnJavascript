const user = {
    name : "harsh",
    price : 999,

    welcomeMessage: function() {
        console.log(`${this.name} , Welcome Here`);    // this - using key of a object for a func key 
                                                      // in the object itself "Current Context"
    },
   
}

user.welcomeMessage();
user.name = "Akhil"            // current conextx value 
user.welcomeMessage();


console.log(this);    // empty parenthesis in node and "window in the browser" IMP

function random()
{
    const userName = "harsh";
    console.log(this.userName);    // undefined COZ only runs in an object
}

const chai = () => {
    instructorName = "Aryan";
    console.log(this.instructorName);   // undefined same for the arrow function
}

chai();
 
// Arrow Function

const addTwo = (num1,num2) => {
    return num1 + num2;                     // Simple Arrow Function
}

// Implicit return function

// const addTWo = (num1 , num2) => (num1 + num2);

const result = addTwo(3,4);
console.log(result);


