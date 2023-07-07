const animal_data = require('./animal-data.json');

class Animal {
  constructor(name, species, color, hunger = 50){
  this.name = name;
  this.species = species;
  this.color = color;
  this.hunger = hunger;
  }
  greet(){
    console.log(`Hi ${this.name} the ${this.species}`)
  }
  feed(){
    this.hunger = this.hunger - 20;
    console.log(`Yum, I love food`)
  }
}

class Cat extends Animal {
  constructor(name, color, hunger = 50){
super (name, 'cat', color, hunger);
this.food = 'fish';{
}
}
greet(){

  console.log(`Meow, I'm ${this.name} the ${this.species}`);
  
}

feed(){

  console.log(`Yum, I love ${this.food}`);
}
}

class Dog extends Animal {
  constructor(name, color, hunger = 50){
    super (name, 'dog', color, hunger);
    this.food = 'kibble';{
    }
  }
  greet(){

    console.log(`Woof, I'm ${this.name} the ${this.species}`);
  }
  
  feed(){

    console.log(`Yum, I love ${this.food}`);
  }
}

class animalShelter {
   constructor(){
    this.animals=[];
  }
  addAnimal(Animal){
    this.animals.push(Animal);
  }
  adopt(Animal){
    const animalIndex = this.animals.indexOf(Animal);
    this.animals.splice(animalIndex, 1);
  }

  getAnimalBySpecies(species){
    return this.animals.filter(a => a.species === species)
  }
}

const shelter = new animalShelter();

for(const a of animal_data){
  let animal;
  const hunger = a.hunger ? a.hunger : 50;
  if (a.species ==='dog'){
    animal = new Dog(a.name, a.color, hunger);
  } else if (a.species === 'cat'){
    animal = new Cat(a.name, a.color, hunger);
  }
  else {
  animal = new Animal(a.name, a.species, a.color, hunger);
  }
  shelter.addAnimal(animal);
}

for(const animal of shelter.animals){
  animal.greet();
  animal.feed();
}