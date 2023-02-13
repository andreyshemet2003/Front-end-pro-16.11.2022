function Auto(car) {
  this.car = car;
} 

Auto.prototype.driving = function (){
  console.log ( `${this.car} driving`);
}

Auto.prototype.breaking = function (){
  console.log ( `${this.car} braking`);
}

Auto.prototype.OpenDoors = function (){

  if (this.car === "Lamborghini") {
    console.log (`${this.car} vertical opening`)
  }
  else {
    console.log (`${this.car} normal opening`);
  }
}
const bmw = new Auto("BMW");
const lamborghini = new Auto("Lamborghini");

bmw.breaking();
bmw.driving();
bmw.OpenDoors();

lamborghini.breaking();
lamborghini.driving();
lamborghini.OpenDoors();


