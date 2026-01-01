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
    console.log(item);
})

// if it was an array of objects
coding.forEach((item) => {
    //console.log(item.key);
})

// NOTE: Other functions defined outside the ForEach loop can also be used. But they have to be referenced.