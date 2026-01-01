//control flow or logic flow
/*
if(condition){
    scope
}*/
//string = true value (truthy)
//empty string = false value (falsy)
//falsy values
//false, 0 -0, BigInt 0n,"",null,undefined,NaN
//empty array = TRUTH value
//switch statement
const score = 400
switch (score) {
    case 100:
        console.log("Score is 100");
        break;
    case 200:
        console.log("Score is 200");
        break;
    case 300:
        console.log("Score is 300");
        break;

    default:
        break;
}
//nullish coalescing operator: ??
let val;
val=5 ?? 10 // assigns 5
val=null ?? 100 //assigns 100; if it can't assign 100, it assigns null.

//Ternary Operator
score > 100 ? console.log("great score! "):console.log("bad score.....");

