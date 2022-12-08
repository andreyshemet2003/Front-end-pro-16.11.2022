 // 1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 
      // (20 20,5 21 21,5….).
      console.log(`Завдання № 1`);
      let startNum = 20;
      console.log("Розрахунок чисел від 20 до 30:");
      console.log(startNum);
      for (index = 0; startNum < 30; ++index) {
        startNum = startNum + 0.5;
        console.log(startNum);
      }

      // 2. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 
      // 10, 20, 30... 100 доларів.
      console.log(`Завдання № 2`);
      console.log("Розрахунок вартості 10$ і далі:");
      let oneDollarInUah = 27
      let dollars = 0
      let convert = 0
      for (index = 0; dollars < 100; ++index) {
        dollars = dollars + 10;
        convert = dollars * oneDollarInUah;
        console.log(`${dollars}$ = ${convert} UAH`);
      }

      // 3. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат 
      // яких не перевищує числа N.
      console.log(`Завдання № 3`);
      let numberN = 50;//Введене ціле число
      // let numberN = prompt("Введіть число N:")
      console.log(`Введене число N: ${numberN}`)
      let startInt = 0,
        maxInt = 100,
        squareOfInt = 0;
      for (index = 0; squareOfInt < numberN && startInt < maxInt; ++index) {
        startInt = startInt + 1;
        squareOfInt = Math.pow(startInt, 2);
        if (squareOfInt < numberN) {
          console.log(`Квадрат числа ${startInt} = ${squareOfInt};`);
        }
      }

      // 4. Дане ціле число. З'ясувати, чи є воно простим (простим називається
      // число, більше 1, які не мають інших дільників крім 1 і себе).
      console.log(`Завдання № 4`);
      let isNumberInt = [50];//Введене ціле число
      isNumberInt.forEach(function (integer) {
        if (isNumberInt % 1 === 0) {
          console.log(`Введене число ${isNumberInt} є ЦІЛОЧИСЕЛЬНИМ!`);
        }
        else {
          console.log(`Введене число ${isNumberInt} НЕ є цілочисельним!`);
        }
      });

      // 5. Дане деяке число. Визначити, чи можна одержати це число шляхом
      // зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна
      // отримати, а 13 - не можна).
      console.log(`
Завдання № 5`);
      var someNumber = 9;//деяке введене число
      var degree = 1;//степінь
      var numDegree = [];//пустий масив для результатів трійки у різних ступенях
      var degreeSomeNum = 0;
      // 2.Создать цикл,который заполнит массив numDegree значениями от 100 до 0 включительно при помощи декремента.
      while (degree <= 20) {//максимальний ступінь 100
        degreeSomeNum = Math.pow(3, degree);
        numDegree.push(degreeSomeNum);
        degree++;
      }
      // console.log(numDegree)
      let searchNum = someNumber;
      let indexNum = numDegree.findIndex(el => el === searchNum);
      indexNum = indexNum + 1;
      console.log(numDegree)
      const filteredDegree = numDegree.filter((funFilter) => funFilter === someNumber % 3 === 0)
      if (someNumber % 3 === 0) {
        console.log(`Введене число ${someNumber} можна отримати ввівши трійку у ступінь ${indexNum}!`)
      }
      else {
        console.log(`Введене число ${someNumber} НЕ можна отримати шляхом введення числа три у будь-яку ступінь!`)
      }

      