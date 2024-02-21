//Joining arrays 
const odd = [1,3,5];
const nums = [2,4,6].concat(odd);
// Short 
const nums1 = [2,4,6,...odd];
//Cloning arrays
const arr = [1,2,3,4];
const arrC = arr.slice();
// Short
const arrC1 = [...arr];
const result = [...odd,2,3,...arrC];
console.log(result)