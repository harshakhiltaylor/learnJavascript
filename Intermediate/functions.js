
function  myName() {
    console.log("Hello Harsh");
}

// myName - Reference  myName() -> Execute

myName();

function addNumbers(number1 , number2) {    // No need to give type of variable
    console.log(number1 + number2);
    return number1 + number2;   // return value if want to pass in a diiferent variable 
}

addNumbers(3,4); // 7
addNumbers(3,"4");  // 34
addNumbers("3","4");  // 34


const result  = addNumbers(3,5);

console.log("Result is :", result);

function loggedInMessage(username)
{    
    // if(!username)

    if(username === undefined)
    {
        console.log("Please enter the name of user!!");
        return ;
    }
    else
    {
    return ` Person ${username} just logged in`;   // either print it or pass it in a variable 
    }
}


console.log(loggedInMessage("harsh"));
console.log(loggedInMessage());


function calculateCartPrice(...num1)  // spread operator

{
    return num1;
}

console.log(calculateCartPrice(200,400,500));
// Spread Operator so that all the values can be displayed 
