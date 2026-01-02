// loops in java
//for loops
const array = [1,2,3,4,5,6]
for (let i = 0; i < array.length; i++) {
    //console.log(array[i]);
    
}

//break and continue 
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element === 2) {
        continue;
    }
    //console.log(element);
    
    if (element === 4) {
        //console.log(`${element} has come up. goodbye :/`);
        break
    }
}

// WHILE loops
let i=0;
while (i<10) {
    //console.log(i);
    i++
}
i=0;

do {
    i++;
    //console.log(i);
    
} while (i<5);

//SPECIAL LOOPS 
//for of 
const User = {
    name: "henry",
    age: 18 
}
const arr = ["hi","what's","up"]
for (const num of arr) {
    //console.log(num);
    
}
const newmap = new Map()
newmap.set('BR',"Brazil")
newmap.set('CR',"Croatia")
newmap.set('DE',"Germany")

//maps only have unique values

//printing maps
for (const [key,value] of newmap) {
    //console.log(key + ' '+ value);
}

//forin loop (objects)
for (const key in User) {
    if (!Object.hasOwn(User, key)) continue;
    
   // console.log(User[key]);
}

//note: if we use for in loop using arrays, keys store indexes of the array.
// therefore, for of loop is used for arrays.

//IMPORTANT - foreach loop
const coding = ["js","ruby","swift"]
coding.forEach((item) => {
    //console.log(item);
})

// if it was an array of objects
coding.forEach((item) => {
    //console.log(item.key);
})

// NOTE: Other functions defined outside the ForEach loop can also be used. But they have to be referenced.
// filtering arrays
const nums = [1,2,3,9,10]
const smallnums = nums.filter( (num) => num < 5)
// console.log(smallnums);
// if scope is opened ({}) , then return keyword is necessary.
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

  const scbooks = books.filter( (b) => b.publish < 2000)
  scbooks.forEach((b) => {
    //console.log(b.title);
    
  })

  //map property of arrays
  let nums1 = [1,2,3,4,5]
  nums1 = nums1.map((i) => i + 10)  
  // chaining = applying multiple properties (same or different) to an array
  nums1=nums1.map((num) => num+10).filter((num) => num >22)
    // console.log(nums1);

//reduction

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12990
    },
]

const initial = 0
const total = shoppingCart.reduce((acc,item) =>  acc + item.price,0)
console.log(`hi, your total today is ${total} unfortunately :>`);
