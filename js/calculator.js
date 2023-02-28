// Task 1

const checkDate = (mSec1) => {
    const yourDate = new Date(mSec1);
    const today = new Date();
const oneDayMilliseconds = 24 * 60 * 60 * 1000;
const yesterdayMilliseconds = today.getTime() - oneDayMilliseconds;
const yesterday = new Date(yesterdayMilliseconds);
    return yourDate.getDay() === today.getDay() && yourDate.getMonth() === today.getMonth() && yourDate.getFullYear() === today.getFullYear();
}
console.log(checkDate(Date.now()));
console.log(checkDate(1676901741000));

// Task 2
const returnDate = (mSec2) => {
  const yourDate = new Date(mSec2);
  const date = yourDate.getDate().toString().padStart(2, "0");
  const month = (yourDate.getMonth() + 1).toString().padStart(2, "0");
  const year = yourDate.getFullYear();
  const hour = yourDate.getHours().toString().padStart(2, "0");
  const minutes = yourDate.getMinutes().toString().padStart(2, "0");
  return `${date}.${month}.${year} ${hour}:${minutes}`;
}
console.log(returnDate(2077269907712));
//Task 3
const lastDate = (mSec3) => {
  const yourDate = new Date(mSec3);
  const today = new Date();
  const difference = yourDate.getTime() - today.getTime();
  const differenceSec = Math.floor(difference / 1000);
  return differenceSec > 0 ? `Прошло уже ${differenceSec} секунд` : `Должно пройти еще ${Math.abs(differenceSec)} секунд`;
}
console.log(lastDate(1637234208631));
console.log(lastDate(2077269907712));