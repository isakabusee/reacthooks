const person = {
  name: "Isaac",
  walk() {
    console.log(this)
  }
};

person.walk();

const walk = person.walk.bind(person);
walk();