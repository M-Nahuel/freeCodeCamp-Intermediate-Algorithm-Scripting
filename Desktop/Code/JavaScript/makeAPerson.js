/*Fill in the object constructor with the following methods below:
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method.
The methods that take an argument must accept only one argument and it has to be a string.
These methods must be the only available means of interacting with the object.*/
const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let fullname = firstAndLast;
  this.getFullName = function() {return fullname;},
  this.getFirstName = function(){return fullname.split(" ")[0];},
  this.getLastName = function(){return fullname.split(" ")[1];},
  this.setFirstName = function(first){
    fullname = fullname.split(" ");
    fullname[0] = first;
    fullname = fullname.join(" ");
  },
  this.setLastName = function(last){
    fullname = firstAndLast.split(" ");
    fullname[1] = last;
    fullname = fullname.join(" ");
  },
  this.setFullName = function(full){
    fullname = full;
    console.log(fullname)
  };
  return fullname;
};
  //Tests
const bob = new Person('Bob Ross');
console.log(bob.getFullName());
console.log(bob instanceof Person);
console.log(bob.firstName);
console.log(bob.lastName);
console.log(bob.getFirstName());
console.log(bob.getLastName());
