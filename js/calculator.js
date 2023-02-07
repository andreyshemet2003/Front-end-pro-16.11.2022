function calcSum(a) {
  return function sum(b) {
   return a += b;
  }
}
const sum = calcSum(0);

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));