//   Task 1

const numbersArray = [1, 1, 2, 3, 4, 5, 5, 5, 6];
const getUniqueElements = (numbersArray) => {
  return [...new Set(numbersArray)];
};

const result = numbersArray;
console.log(getUniqueElements(result));


//   Task 2

const userBob = { name: "Bob" };
const userJane = { name: "Jane" };

const userMap = new Map();

userMap.set(userBob, `Hello ${userBob.name} nice to see you`);
userMap.set(userJane, `How your kids doing ${userJane.name}`);

const sayHiFunc = (obj) => {
  return userMap.get(obj);
};
console.log(sayHiFunc(userBob));
console.log(sayHiFunc(userJane));


//   Task 3

const myMap = new Map([
  ["name", "Kate"],
  ["surname", "Smith"],
]);
const object = { name: "Sam", surname: "Jones" };

const transform = (obj) => {
  if (obj.size) {
    return Object.fromEntries(obj);
  } else {
    return new Map(Object.entries(obj));
  }
};

console.log(transform(myMap));
console.log(transform(object));