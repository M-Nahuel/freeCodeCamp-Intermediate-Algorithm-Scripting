/*Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
Calling this returned function with a single argument will then return the sum:
var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.
If either argument isn't a valid number, return undefined.*/
function addTogether() {
  let suma;
  let a = arguments[0];  
  if(arguments.length<2){
    if (typeof a != "number"){
      return suma;
    };
    return function(b){
    if(typeof b == "number"){
      return a+b
      };
    };
    };
    let b = arguments[1];
    if(typeof a == "number" && typeof b == "number"){
      suma = a+b;
    };
  
  return suma;
};
//Tests
console.log(addTogether(2,3));
console.log(addTogether(23, 30));
console.log(addTogether(5)(7));
console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ"));
console.log(addTogether(2, "3"));
console.log(addTogether(2)([3]));
console.log(addTogether("2", 3));
console.log(addTogether(5, undefined));
