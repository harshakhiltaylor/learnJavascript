// singleton
// Object.create


// Object literals

const mysym = Symbol("Key");

const userJs = {
    name:"Hitesh",
    [mysym] : "key1",
    "full name" : "harsh Tailor",
    age:18,
    city: "Jaipur",
    email: "harsh@gmail.com"
}

console.log(userJs["email"]);
console.log(userJs["full name"]);
console.log(userJs[mysym]);

// To freeze element so that It can not change the value in the object 

//Object.freeze(userJs);

userJs.greeting = function()
{
    console.log("Hello World");
}

userJs.greetingTwo = function()
{
    console.log(`this is my name ${this.name}`);
}

console.log(userJs.greetingTwo());