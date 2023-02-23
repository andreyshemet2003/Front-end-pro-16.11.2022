class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showHumansInfo() {
    console.log(`Name: ${this.name} / Age: ${this.age}.`);
  }
}

const andrew = new Human("Andrew", 19);
andrew.showHumansInfo();

const laura = new Human("Laura", 17);
laura.showHumansInfo();

const kate = new Human("Kate", 22);
kate.showHumansInfo();

const pablo = new Human("Pablo", 36);
pablo.showHumansInfo();


class Auto {
  owner;
  constructor(brand, model, yearOfRelease, licensePlate) {
    this.brand = brand;
    this.model = model;
    this.yearOfRelease = yearOfRelease;
    this.licensePlate = licensePlate;
  }

  showAutoInfo() {
    console.log(` 
    Auto -
      Brand: ${this.brand} 
      Model: ${this.model} 
      Year of release: ${this.yearOfRelease} 
      LicensePlate: ${this.licensePlate}.`);
  }

  addOwner(human) {
    if (human.age < 18) {
      console.log(`${human.name}: cannot be the owner!
   Age: ${human.age} y.o.`);
      return;
    }
    this.owner = human;
  }

  showOwner() {
    console.log(`The owner of ${this.brand}: ${this.owner.name}.
    Age: ${this.owner.age} y.o.`);
  }
}

const nissan = new Auto("Nissan", "Leaf", 2010, "UA E4873HR");
nissan.showAutoInfo();
nissan.addOwner(andrew);
nissan.showOwner();

const toyota = new Auto("Toyota", "Prado", 1987, "UA AB2152AH");
toyota.showAutoInfo();
toyota.addOwner(laura);

const bmw = new Auto("BMW", "X5", 2005, "UA 00007");
bmw.showAutoInfo();
bmw.addOwner(kate);
bmw.showOwner();

const mazda = new Auto("Mazda", "5", 2003, "UA AA6734ZE");
mazda.showAutoInfo();
mazda.addOwner(pablo);
mazda.showOwner();
