/*Find the smallest common multiple of the provided parameters that can be evenly divided by both,
as well as by all sequential numbers in the range between these parameters.
The range will be an array of two numbers that will not necessarily be in numerical order.
For example, if given 1 and 3, find the smallest common multiple of both 1 and 3
that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.*/

function smallestCommons(arr) {
    let rango = arr.slice(1);
    if(arr[0]>rango[0]){
      rango.push(arr[0]);
    } else {
      rango.unshift(arr[0]);
    };
    console.log(rango)
    for (let i = rango[0]+1; i < rango[1]; i++){
      rango.push(i);
    };
    rango.sort();
    let n = 0;
    let scm = rango[rango.length-1] * rango[n];
    while (!rango.every(number => scm % number === 0)){
      n++;
      scm = rango[rango.length-1] * n;
    }
    return scm;
  };
  //Tests
  console.log(smallestCommons([1, 5]));
  console.log(smallestCommons([2, 10]));
  console.log(smallestCommons([5, 1]));
  console.log(smallestCommons([1, 13]));
  console.log(smallestCommons([23, 18]));