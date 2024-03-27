"use strict";

/// Level 1 ///

const Guest = {
  name: "John",
  isRegistered: false,
};

const User = {
  isRegistered: true,
  isAdmin: false,
  email: "email@mail.com",
  __proto__: Guest,
};

const Admin = {
  isAdmin: true,
  addProduct(product) {
    console.log(`I'm an admin, adding a new product - ${product}`);
  },
  __proto__: User,
};

// Admin.addProduct("Phones");
for (const key in Admin) {
  console.log(key);
}

/// ------------------------Task-2------------------------ ///

const Vehicle = {
  ride() {
    console.log(`Driving a ${this.name} with ${this.speed} km/h speed!`);
  },
};

const Car = {
  name: "Car",
  speed: 120,
  __proto__: Vehicle,
};

const Bicycle = {
  name: "Bicycle",
  speed: 35,
  __proto__: Vehicle,
};

Car.ride();
Bicycle.ride();

/// ------------------------Task-3------------------------ ///

const Animal = {
  sleep() {
    console.log("I am sleeping..");
  },
};

const Dog = {
  showVoice() {
    console.log("Gav!");
  },
  __proto__: Animal,
};
const Pug = {
  name: "Charley",
  sayHi() {
    console.log(`Good evening, my name is ${this.name}!`);
  },
  sleep() {
    Animal.sleep();
    console.log("I sleep and snore");
  },
  __proto__: Dog,
};
Pug.showVoice();
Pug.sayHi();
Pug.sleep();

/// Level 2 ///

const user = {
  _name: "",
  _age: 0,
  get userAge() {
    return this._age;
  },
  set userAge(value) {
    if (value > 0) {
      console.log(`User age is ${(this._age = value)} years old!`);
    } else {
      console.log("Your age less than 0");
    }
  },
  get userName() {
    return this._name;
  },
  set userName(value) {
    if (value.length > 2) {
      console.log(`User name is ${(this._name = value)}!`);
    } else {
      console.log("Your name is too short!");
    }
  },
};

user.userAge = 22;
user.userName = "John";

user.userName = "Jo";
user.userAge = -22;

/// Level 3 ///

function Triangle(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.getSquare = function (value) {
    const p = (this.a + this.b + this.c) / value;
    return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
  };
}

const triangle1 = new Triangle(5, 4, 3);
const triangle2 = new Triangle(5, 5, 2);
const triangle3 = new Triangle(4, 4, 4);

console.log("triangle1:", triangle1.getSquare(2));
console.log("triangle2:", triangle2.getSquare(2));
console.log("triangle3:", triangle3.getSquare(2));
