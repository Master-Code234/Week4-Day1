// Create a Hamster class
class Hamster {
  constructor(name) {
    this.name = name;
    this.owner = "";
    this.price = 15;
  }
  wheelRun() {
    console.log(`squeak squeak`);
  }
  eatFood() {
    console.log(`nibble nibble`);
  }
  getPrice() {
    return this.price;
  }
}
const pet = new Hamster();
pet.getPrice();

class person {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.height = 0;
    this.weight = 0;
    this.mood = 0;
    this.hamsters = [];
    this.bankAccount = 0;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  getWeight() {
    return this.weight;
  }
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
  eat() {
    this.weight++, this.mood++;
  }
  exercise() {
    this.weight--;
  }
  ageUp() {
    this.age++,
      this.height++,
      this.weight++,
      this.mood--,
      (this.bankAccount += 10);
  }
  buyHamster(hamster) {
    this.hamsters.push(hamster);
    (this.mood += 10), (this.bankAccount -= hamster.getPrice());
    console.log(this.hamsters);
  }
}
// Instantiate a new Person named Timmy
const timmy = new person(`Timmy`);

// Age Timmy five years
for (i = 0; i < 5; i++) {
  timmy.ageUp();
}

// Have him eat five times.
for (i = 0; i < 5; i++) {
  timmy.eat();
}

//  Have him exercise five times
for (i = 0; i < 5; i++) {
  timmy.exercise();
}

//  Age Timmy 9 years
for (i = 0; i < 9; i++) {
  timmy.ageUp();
}

// Create a hamster named Gus
const hamster = new Hamster(`Gus`);

//  Set Gus's owner to the string "Timmy"
hamster.owner = "Timmy";

//  Have Timmy "buy" Gus
timmy.buyHamster(hamster);

//  Age Timmy 15 years
for (i = 0; i < 15; i++) {
  timmy.ageUp();
}
// Have Timmy eat twice
timmy.eat();
timmy.eat();

// Have Timmy exercise twice
timmy.exercise();
timmy.exercise();

console.log(timmy);

// factory is just an object that produces other objects
class Dinner {
  // Add a constructor to dinner that sets the string properties, appetizer, entree and dessert.
  constructor( appetizer, entree, dessert) {
    this.appetizer = appetizer;
    this.entree = entree;
    this.dessert = dessert;
  }
}

class Chef {
  constructor(factoryType) {
    this.factoryType = factoryType;
    this.dinnerCollection = [];
  }
  makeNewDinner(appetizer, entree, dessert) {
    const createDinner = new Dinner(appetizer,entree,dessert);
    this.dinnerCollection.push(createDinner);
  }
  printDinner() {
    for (let dinner of this.dinnerCollection) {
      console.log(dinner);
    }
    
  }
}




  let dinnerFactory = new Chef ('Menu Items')
  console.log(dinnerFactory)

   // Have the Chef create 3 dinners
  dinnerFactory.makeNewDinner('Bread Sticks', 'Pizza', 'Cake')
  dinnerFactory.makeNewDinner('Carbonara Arancini', 'Lasagna', 'ice cream')
  dinnerFactory.makeNewDinner('pasta salad', 'Lasagne alla Bolognese. ', 'rasberry pie')
  

  // log the dinners
  dinnerFactory.printDinner()

  //creates objects and stores them
  //  create dinner and store it in constructor
  // Add a method on chef that takes three arguments and returns a new Dinner based on those arguments.

 

