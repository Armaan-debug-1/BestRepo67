console.log("Objects in JavaScript");
console.log();

const mySym = Symbol("key");
// object literals
const JSUser = {
  name: "Palika",
  age: 67,
  [mySym]: "mykey",
  location: "Patiala",
  email: "PalikaChopra@thapar.edu",
  isLoggedin: false,
};
//Object.create() -> can create singleton objects.
JSUser.email = "Palika@thapar.edu";
//Object.freeze(JSUser): freezes user, changes are not propogated.
JSUser.greeting = function () {
  console.log(`Hello There ${this.name}`);
};
//console.log(JSUser.greeting());
// how to merge two objects
const obj1 = {
  1: "a",
  2: "b",
  3: "c",
};
const obj2 = {
  4: "d",
  5: "e",
};
const obj3 = Object.assign({}, obj1, obj2); //merges objects
//console.log(obj3);
//another way (spread)
const obj67 = {...obj1,...obj2} // same result
//console.log(Object.keys(JSUser)) // returns array of keys
//console.log(JSUser.hasOwnProperty('IsLoggedin')); //returns true or false

const {name: n} = JSUser //new name for name in JSUser
console.log(n);

/* APIS
menu at a restaurant = API Documentation
json = {
    "name": "Joanne",
    "price": "120",
    "coursename": "JS in Spanish"
    }

*/