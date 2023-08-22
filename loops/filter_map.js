coding = ["js" , "ruby" , "java" , "c++"];

coding.forEach((item) => {
    console.log(item);
});

//  forEach does not return values 

const myNum = [1,2,3,4,5,6,7,8,9];

const filterdNum = myNum.filter((nums) =>
    nums > 4                                // agar curly braces lagaenge to value return nhi hogi
                                            // remember 
                                            // agar braces mai return karana hai to "return" 
                                            // keyword ka  use kar
);
console.log(filterdNum);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
     
    // perfect example how to fetch data  or use filter  

  let userBook = books.filter((bk) =>{
    return bk.genre ==="History"
  })

  userBook  = books.filter((bk) => {
    return bk.publish >= 2000
  })


  console.log(userBook);

 // map se operation kar sakte hai 

  myNumbers = [1,2,3,4,5,6,7,8,9];

  //const nums = myNumbers.map((item) => {
  //  return (item*10)
  //})

  const nums = myNumbers
         .map((item) => item*10)
         .map((item) =>item + 1)
        .filter((item) => item>=41)


  console.log(nums);