class Human {

  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
  getHumansInfo() {
    return `Name: ${this.name} / Gender: ${this.gender}.`;
  }
}

const andrew = new Human("Andrew", "female");
const john = new Human("John", "male");
const kate = new Human("Kate", "female");
const pablo = new Human("Pablo", "male");

console.log(andrew.getHumansInfo());
console.log(john.getHumansInfo());
console.log(kate.getHumansInfo());
console.log(pablo.getHumansInfo());

class Apartment {
  residents = [];

  addResident(human) {
    this.residents.push(human.name);
  }

  showResidents() {
    console.log(`Residents of apartment: ${this.residents}.`);
  }
}

const apartment1 = new Apartment();
const apartment2 = new Apartment();
const apartment3 = new Apartment();
const apartment4 = new Apartment();

apartment1.addResident(andrew);
apartment1.showResidents();

apartment2.addResident(john);
apartment2.showResidents();

apartment3.addResident(kate);
apartment3.addResident(pablo);
apartment3.showResidents();

class House {
  apartments = [];
  apartmentsMax;

  constructor(apartmentsMax) {
    this.apartmentsMax = apartmentsMax;
  }
  addApartment(apartment) {
    if (this.apartments.length < this.apartmentsMax) {
      this.apartments.push(apartment);
      return this.apartments;
    }
    return console.log("House is full!");
  }
  showApartments() {
    console.log(this.apartments);
  }
}

const house = new House(5);

house.addApartment(apartment1);
house.addApartment(apartment2);
house.addApartment(apartment3);
house.addApartment(apartment4);
house.showApartments();

const house2 = new House(3);

house2.addApartment(apartment1);
house2.addApartment(apartment2);
house2.addApartment(apartment3);
house2.addApartment(apartment4);
house2.showApartments();