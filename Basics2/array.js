// Array 

const myArr = [1,2,3,3,4,5]
const myHeros = ["SuperMan" , "IronMan" , "Hulk"];

const myArr2 = new Array(1,2,3,4)

console.log(myArr[1]);

myArr.push(6);
myArr.push(7);

console.log(myArr);

myArr.pop();




myArr.unshift(9);  // insert elment at the start of an array 
                    // Not good for long arrays
myArr.shift();

console.log(myArr);

const newArr = myArr.join();
console.log(newArr);

//  Slice AND Splice


