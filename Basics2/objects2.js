// const tinderUser = new Object

const tinderUser = {

}

tinderUser.id = "1213abc"
tinderUser.name = "harsh"
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
    email: "harsh@gmail.com",
    fullname: {
        username:
        {
            myname:"harsh"
        }
    }
}

console.log(regularUser.fullname.username.myname);

const obj1 = {
    1: "a",
    2: "b",
}

const obj2 = {
    3: "c",
    4: "d"
}

//const obj3 = obj1 + obj2;

const obj3 = Object.assign({},obj1,obj2)  // optional parameter {} based on your choice 

// Spread operator used in Array as well as obj4 

const obj4 = { ...obj1 , ...obj2};
console.log(obj3);
console.log(obj4);

console.log(tinderUser);
console.log(Object.keys(tinderUser));    // return KEys IMP
console.log(Object.values(tinderUser));  // return VAlues IMP
console.log(Object.entries(tinderUser)); // return values with the keys


