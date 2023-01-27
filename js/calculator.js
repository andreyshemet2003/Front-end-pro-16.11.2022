const numbersArray = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47,
];

//part 1
let PositiveNumber = 0,
  sumNumber = 0;

numbersArray.forEach((el) => {
  if (el > 0) {
    PositiveNumber++;
    sumNumber += el;
  }
});
console.log("MaxPositiveNumber:", PositiveNumber);
console.log("SumOfNumber:", sumNumber);

//part 2, 3
let lowest = 0;
let positiveIndex = 0;
for (let i = 1; i < numbersArray.length; i++) {
  if (numbersArray[i] < numbersArray[lowest])
    lowest = i;

  if (numbersArray[i] > numbersArray[positiveIndex])
    positiveIndex = i;

}

console.log("Lowest index", lowest + 1)
console.log("Min:", Math.min.apply(null, numbersArray));

console.log("maxPositiveIndex", positiveIndex + 1)
console.log("Max:", Math.max.apply(null, numbersArray));


//part 4
let count = 0;

for (let i = 0; i < numbersArray.length; i++) {
if (numbersArray[i] < 0) {
count++;
}
}

console.log(count); // 10

//part 5-9
let Task5 = 0,
  Task6 = 0,
  Task7 = 0,
  Task8 = 0,
  Task9 = 1;

numbersArray.forEach((el) => {
  if (el > 0) {
    if (el % 2 === 0) {
      Task6++;
      Task7 += el;
    } else {
      Task5++;
      Task8 += el;
    }
    Task9 *= el;
  }
});
console.log("Task5",Task5);
console.log("Task6",Task6);
console.log("Task7",Task7);
console.log("Task8",Task8);
console.log("Task9",Task9);

// Task 10
let maxNumber = Math.max.apply(null, numbersArray);
let resultTask10 = numbersArray.map((el) => {
  el !== maxNumber ? (el = 0) : el;
  return el;
});
console.log(resultTask10);