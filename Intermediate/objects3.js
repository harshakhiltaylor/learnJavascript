const course = 
{
    course: "JS MasterClass",
    price: "999",
    instructor : "Harsh"
}

console.log(course.instructor);
// Another way writing this is as follows
 
const {instructor : instruc} = course;  // Just a shorter way || used in React JS

//console.log(instructor);
console.log(instruc);

// JSON API Intro

// {
//     "course" : "JS",
//     "name" : "Harsh akhil"
// }

// Array of a API and nesting between both of them 

// [
//     {},
//     {},
//     {},
// ]
