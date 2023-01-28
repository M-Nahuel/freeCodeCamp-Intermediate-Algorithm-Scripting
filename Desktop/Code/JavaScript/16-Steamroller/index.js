/*Flatten a nested array. You must account for varying levels of nestin*/
function steamrollArray(arr) {
  let array = [];
  function loop (arr){
  for (let i=0; i<arr.length; i++){
    if (!Array.isArray(arr[i])){
      array.push(arr[i]);
    } else{
      loop(arr[i]);
    };
  };
  };
  loop(arr);  
  return array;
}
//Tests
console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([[["a"]], [["b"]]]));
console.log(steamrollArray([1, [], [3, [[4]]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));
