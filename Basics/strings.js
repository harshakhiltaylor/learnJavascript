const name = "harsh"
const courseCount = 50;

// placeholder , better approach - String Interpolation 


console.log(`My name is ${name} and course discont is ${courseCount}`);

const gameName = new String('harsthya');

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase);

console.log(gameName.charAt(4));
console.log(gameName.indexOf('h'));   // Please write the character in the double quotes otherwise
                                      // will return an error

// function substring of a particular string involve passing the start and end 
// will not include the end index charcter.
                                      
const newString = gameName.substring(0,4);
console.log(newString);

// negative values can be used on the index

const anotherString = gameName.slice(-7,4);
console.log(anotherString);

// Trim Function - used to remove space from the string 

const newStringtwo = "   harsh  ";
console.log(newStringtwo);
console.log(newStringtwo.trim());


const url = "https://harsh.com/harsh%20roy";
console.log(url.replace('%20','-'));
console.log(url.includes('harsh'));

// Split will Convert the String into an array based on the "Separator" or "Limit"

const nymphoString = "harsh-akhil-taylor";
console.log(nymphoString.split('-'));

