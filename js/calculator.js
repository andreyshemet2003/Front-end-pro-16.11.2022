function Car() {
  this.drive = function () {
    console.log("drinibg");
  };

  this.brake = function () {
    console.log("breaking");
  };

  this.openDoors = function () {
    console.log("doors opening normal");
  };
}

function Lamborghini() {
  Car.call(this);

  this.openDoors = function () {
    console.log("vertical open in Lamborghini");
  };
}

Lamborghini.prototype = Object.create(Car.prototype);
Lamborghini.prototype.constructor = Lamborghini;

let myLambo = new Lamborghini();

myLambo.drive();
myLambo.brake();
myLambo.openDoors();

let myCar = new Car();

myCar.drive();
myCar.brake();
myCar.openDoors();