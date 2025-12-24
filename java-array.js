const myArr = [1,2,"Deji"]

let myArr1 = new Array(1,2,3,4,5,6)
//console.log(myArr1[2])
//array.length() = returns length of array
/*
Array Methods

1. myArr.push(6) --> adds the number 6 to given array
2. myArr.pop() --> removes last element from array
3. myArr.unshift(9) --> adds 9 as first element of array, not preferred.
4. myArr.shift() --> removes the first elem from array
5. myArr.includes(elem)  --> self explanatory
6. myArr.indexOf(elem) --> checks index ; returns -1 if not there
7. MyArr.join() --> converts array into string
8. MyArr.slice(start,stop) --> returns new array from start to stop-1 (all inclusive)
9. myArr.splice(start,stop) --> returns new array from start to stop 
    and also deletes all elements in the given closed range from the original array. 
 */
const marvel_heroes = ["Iron Man","Spiderman","Black Widow"]
const dhurandhar = ["Hamza","Uzaid","Rehman"]
// marvel_heroes.push(dhurandhar)
// console.log(marvel_heroes);
const all_Heroes = marvel_heroes.concat(dhurandhar)
/*
console.log(all_Heroes);
array.flat(depth) = converts all sub array elements into elements of the master array. depth can 
also be infinity.
*/
//Array.from(string) = convert non array to an array
//Array.isArray(array) = returns true/false
//Array.of(elem1,elem2,elem3) = returns new array wotj variables