const expr= prompt("Скажите, какую операцию хотите выполнить")

if (true){
  const firstNumber = prompt('Enter first number', 0);
  const secondNumber = prompt('Enter second number', 0);
switch (expr) {
  case "Вычитание":
    const diff = firstNumber - secondNumber;
    alert(`Разница между ${firstNumber} и ${secondNumber} является ${diff}`)
    break;
  case "Сложение":
    const add = firstNumber + secondNumber;
    alert(`Разница между ${firstNumber} и ${secondNumber} является ${add}`)
    break;
  case "Умножение":
    const mult = firstNumber * secondNumber;
    alert(`Разница между ${firstNumber} и ${secondNumber} является ${mult}`)
    break;
  case "Деление":
    const div = firstNumber / secondNumber;
    alert(`Разница между ${firstNumber} и ${secondNumber} является ${div}`)
    break;
}
}