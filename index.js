// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   name = 0;
//   getName = () => {
//     return this.name;
//   };
//   getAge() {
//     return this.age;
//   }
//   get info() {
//     return `${this.name} is ${this.age}`;
//   }
//   set info({ name, ownerName }) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const obj = {
//   method() {
//     return this;
//   },
// };

// class Pet {
//   constructor(name, ownerName) {
//     this.name = name;
//     this.ownerName = ownerName;
//   }
//   static type = "House Pet";
//   static getTypeArrow = () => {
//     return this.type;
//   };
//   static getType() {
//     return this.type;
//   }
//   getPetName() {
//     debugger;
//     return this.name;
//   }
//   getOwnerName = () => {
//     debugger;
//     return this.ownerName;
//   };
//   get petInfo() {
//     return `Pet - ${this.name}, Owner - ${this.ownerName}`;
//   }
//   set petInfo({ name, ownerName }) {
//     this.name = name;
//     this.ownerName = ownerName;
//   }
// }

// class Dog extends Pet {
//   constructor(haveVaccine, name, ownerName) {
//     super(name, ownerName);
//     this.haveVaccine = haveVaccine;
//     // this.healthy = true;
//   }
//   healthy = true;
//   bark = (isBarking) => {
//     this.bark = isBarking;
//     this.healthy = false;
//   };
// }

// // create Pet class
// // initialize with pet name and ownerName
// // add 2 methods getPetName and getOwnerName
// // add getter and setter petInfo for name and ownerName

// const pet = new Pet("Peter", "Taras");
// const dog = new Dog(true, "Peter", "Taras");
// // const user = new User("Taras");
// // user.getAge();
// // user.getName();

// const decorator = (func) => {
//   return () => {
//     func();
//   };
// };

// const decoratedName = decorator(dog.getPetName);
// // decoratedName();
// const decoratedAge = decorator(dog.getOwnerName);
// decoratedAge();

// function UserConstructor(name) {
//   this.name = name;
//   this.age = 0;
// }

// UserConstructor.prototype.getAge = function () {
//   return this.age;
// };
// const userFunc = new UserConstructor("Taras");

class Shape {
  constructor(color) {
    this._color = color;
  }
  #private = true;
  #privateMethod = () => {
    return this._color;
  };
  checkPrivate = () => {
    const color = this.#privateMethod();
    return `${color} private field ${this.#private}`;
  };
  get color() {
    return this._color;
  }
  set color(value) {
    this._color = value;
  }
  setColor(color) {
    this._color = color;
  }
  getColor() {
    return this.color;
  }
}

class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }
  getArea = () => {
    return this.height * this.width;
  };
  getColor = () => {
    // const color = super.getColor();
    const area = this.getArea();
    return `Rectangle has ${this.color} color is ${area}`;
  };
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }
  getArea = () => {
    return Math.PI * this.radius ** 2;
  };
}

const square = new Rectangle("blue", 4, 4);
const circle = new Circle("red", 4);
const decorator = (func) => {
  return () => {
    func();
  };
};

const decoratedColor = decorator(square.getColor);
decoratedColor();
