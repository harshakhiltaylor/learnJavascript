let score = "33abc";

console.log(typeof score);
console.log(typeof(score));

let ValueInNumber = Number(score)
console.log(typeof(ValueInNumber));

//"33" => 33
// "abc" => NaN
// "True" => 1 "False" => 0


let isLoggedIn = "harsh";

let isBoolean = Boolean(isLoggedIn);
console.log(isBoolean);

// 1  => true 0 =>false
// "harsh" => true
// "" => false