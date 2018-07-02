class Animal {
  constructor(name) {
    this.name = name;
  }
  say() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const animal = new Animal('Tom');
animal.say();
animal.name = 'Marry';
animal.say();