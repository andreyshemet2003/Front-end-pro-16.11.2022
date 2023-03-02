class SuperMath {
  check(obj) {
    const answer = confirm(
      `Чи хочете ви виконати саме цю дію ${obj.X} ${obj.znak} ${obj.Y} ?`
    );

    let result = 0;
    if (answer) {
      if (obj.znak === "+") {
        result = obj.X + obj.Y;
      } else if (obj.znak === "-") {
        result = obj.X - obj.Y;
      } else if (obj.znak === "*") {
        result = obj.X * obj.Y;
      } else if (obj.znak === "/") {
        result = obj.X / obj.Y;
      } else if (obj.znak === "%") {
        result = obj.X % obj.Y;
      }
      console.log(result);
    } else {
      this.input();
    }
  }

  input() {
    let result = 0;
    const numOne = Number(prompt("Введіть перше число"));
    const numTwo = Number(prompt("Введіть друге число"));

    const mathSign = prompt(
      "Введіть потрібний вам знак, наприклад: + , - , * , / , %"
    );
    if (mathSign === "+") {
      result = numOne + numTwo;
    } else if (mathSign === "-") {
      result = numOne - numTwo;
    } else if (mathSign === "*") {
      result = numOne * numTwo;
    } else if (mathSign === "/") {
      result = numOne / numTwo;
    } else if (mathSign === "%") {
      result = numOne % numTwo;
    } else {
      console.log("Виникла помилка,введіть вірний знак");
    }
    console.log(result);
  }
}
let obj = { X: 12, Y: 3, znak: "/" };
const p = new SuperMath();
p.check(obj);