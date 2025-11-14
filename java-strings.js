// Correct way to define strings
const grade = "A+"
console.log(`The grade you got is ${grade}`)
//This is the modern  way. Do not use + or ,
const newstr = new String("HelloWorld")
//Does the same thing
//charAt = Tells position of a character
// console.log(newstr.charAt(3));
//indexOf = tells index of character
// console.log(newstr.indexOf('o'));
// string.substring(start, end)= slices a string
//string.slice(start, end) also accepts negative arguments
// console.log(newstr.substring(0,1));

//string.trim() removes leading AND trailing spaces

// String.replace(old, new) - replaces a substring with a new substring in a parent string

//strings.includes(substring)- returns a boolean value

//string.split(seperator, end) : returns an array and seperates the string into different parts
