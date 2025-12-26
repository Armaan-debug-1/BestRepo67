function sentence() {
  console.log("Armaan is the best");
}
function loginUserMessage(username) {
  if (!username) {
    console.log("Please enter a username: ");
    return;
  }
  return `${username} just logged in `;
}
// console.log(loginUserMessage("Sierra"));

// "", undefined -> false always
//function(parameter = "id1") -> default value of parameter is id1.
function calcCartPrice(...num) {
  //rest operator
  return num;
}
// console.log(calcCartPrice(122,100,300));
// objects as parameters
const User = {
  name: "Rohit",
  balance: 6767,
};

function handlingObj(anyobject) {
  console.log(
    `your username is ${anyobject.name} and balance is ${anyobject.balance}`
  );
}
// handlingObj(User);

/*
scope
let, const -> safe way to declare variables ( scope within block )
var -> very unsafe (always leads to global scope)

addTwo(5) //does not work
const addTwo = function(num){
return num+2}
however, if function was declared by other method, it would work.
*/
// this

const User1 = {
  username: "Joanne",
  balance: 6996,
  WelcomeMessage: function () {
    console.log(`your username is ${this.username}`);
  },
};
// console.log(User1.WelcomeMessage());
User1.username = "Melanie";
// console.log(User1.WelcomeMessage());

//            Arrow Function
const addnum = (num1, num2) => num1 + num2; //returns sum of num1 and num2
const addnum1 = (num1, num2) => {
  return num1 + num2;
}; //returns sum of num1 and num2
// console.log(addnum(1,2),addnum1(0,3));
//immediately invoked function

(function prints() {
  //named IIFE
  console.log(`Database connected. `);
})(); //semicolon is imp //automatically invokes the function
User.name="Ar";

((anyobject) => {
  //unnamed arrow IIFE
  console.log(`your name is ${anyobject.name}`);
})(User);
/*
javascript code executrion steps
gec = global execution context 
JS is a single threaded language
FEC = function execution context
EEC = Eval execution context ( property of global )
JS code -> memory creation phase -> execution phase
 
*/
