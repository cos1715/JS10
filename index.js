class Vehicle {
  constructor({ power, gasTank, mass }) {
    this.power = power;
    this.gasTank = gasTank;
    this.gas = gasTank;
    this.mass = mass;
    this.#maxSpeed = this.#calculateMaxSpeed();
    this.#gasUsage = this.#calculateGasUsage();
  }
  started = false;
  speed = 0;
  #maxSpeed = 0;
  #gasUsage = 0;
  #speedMultiplier = 0.84;
  #calculateMaxSpeed = () => {
    return (this.#speedMultiplier * this.power) / this.mass;
  };
  #calculateGasUsage = () => {
    return Math.round((this.#maxSpeed / this.power) * 100);
  };
  #calculateUsedGas = (distance) => {
    return (distance * this.#gasUsage) / 100;
  };
  getMaxSpeed = () => {
    return this.#maxSpeed;
  };
  getGasUsage = () => {
    return this.#gasUsage;
  };
  startEngine = () => {
    this.started = true;
    return this;
  };
  stopEngine = () => {
    this.started = false;
    return this;
  };
  drive = (speed, distance) => {
    const gasUsed = this.#calculateUsedGas(distance);
    const gasDiff = this.gas - gasUsed;
    if (this.started) {
      if (speed > this.#maxSpeed) {
        this.speed = this.#maxSpeed;
      } else if (speed < 0) {
        this.speed = 0;
      } else {
        this.speed = speed;
      }
      this.gas = gasDiff <= 0 ? 0 : gasDiff;
    }
    return this;
  };

  addGas = (gas) => {
    const gasSum = this.gas + gas;
    this.gas = gasSum > this.gasTank ? this.gasTank : gasSum;
    return this;
  };

  printInfo() {
    const info = {
      power: this.power,
      gasTank: this.gasTank,
      gas: this.gas,
      mass: this.mass,
      maxSpeed: this.#maxSpeed,
      gasUsage: this.#gasUsage,
      started: this.started,
      speed: this.speed,
    };
    console.log(info);
    return info;
  }
}

class Car extends Vehicle {
  constructor({ type, maxPassengerCount, ...rest }) {
    super(rest);
    this.type = type;
    this.maxPassengerCount = maxPassengerCount;
  }
  printInfo() {
    const info = super.printInfo();
    const updatedInfo = {
      ...info,
      type: this.type,
      maxPassengerCount: this.maxPassengerCount,
    };
    console.log(updatedInfo);
    return updatedInfo;
  }
}

class Bus extends Car {
  constructor(config) {
    super(config);
  }
  passengerCount = 0;
  updatePassengers = (passengers) => {
    const passengersDiff = this.passengerCount + passengers;
    if (passengersDiff > this.maxPassengerCount) {
      this.passengerCount = this.maxPassengerCount;
    } else if (passengersDiff < 0) {
      this.passengerCount = 0;
    } else {
      this.passengerCount = passengersDiff;
    }
  };
  printInfo() {
    const info = super.printInfo();
    const updatedInfo = {
      ...info,
      passengerCount: this.passengerCount,
    };
    console.log(updatedInfo);
    return updatedInfo;
  }
}

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

// class Shape {
//   constructor(color) {
//     this._color = color;
//   }
//   #private = true;
//   #privateMethod = () => {
//     return this._color;
//   };
//   checkPrivate = () => {
//     const color = this.#privateMethod();
//     return `${color} private field ${this.#private}`;
//   };
//   get color() {
//     return this._color;
//   }
//   set color(value) {
//     this._color = value;
//   }
//   setColor(color) {
//     this._color = color;
//   }
//   getColor() {
//     return this.color;
//   }
// }

// class Rectangle extends Shape {
//   constructor(color, width, height) {
//     super(color);
//     this.width = width;
//     this.height = height;
//   }
//   getArea = () => {
//     return this.height * this.width;
//   };
//   getColor = () => {
//     // const color = super.getColor();
//     const area = this.getArea();
//     return `Rectangle has ${this.color} color is ${area}`;
//   };
// }

// class Circle extends Shape {
//   constructor(color, radius) {
//     super(color);
//     this.radius = radius;
//   }
//   getArea = () => {
//     return Math.PI * this.radius ** 2;
//   };
// }

// const square = new Rectangle("blue", 4, 4);
// const circle = new Circle("red", 4);
// const decorator = (func) => {
//   return () => {
//     func();
//   };
// };

// const decoratedColor = decorator(square.getColor);
// decoratedColor();

// function addGas(gas) {
//   const gasVolume = this.gasTank + gas;
//   this.gasTank = gasVolume > this.maxGas ? this.maxGas : gasVolume;

//   return this;
// }

// class Car {
//   constructor(model, color, age, speed, gasTank, started) {
//     this.model = model;
//     this.color = color;
//     this.age = age;
//     this.#speed = speed;
//     this.#gasTank = gasTank;
//     this.#started = started;
//   }
//   #speed;
//   #gasTank;
//   #started;
//   #maxSpeed = 200;
//   #maxGas = 20;
//   #checkIsEmptyGasTask = () => {
//     return this.gasTank === 0;
//   };
//   startEngine = () => {
//     this.#started = !this.#checkIsEmptyGasTask();

//     return this;
//   };
//   drive() {
//     const isEmpty = this.#checkIsEmptyGasTask();
//     const isStarted = this.#started;
//     if (!isEmpty && isStarted) {
//       this.#speed = 30;
//     }

//     return this;
//   }
//   stop = () => {
//     this.#started = false;
//     this.#speed = 0;

//     return this;
//   };
//   speedUp = (newSpeed) => {
//     const isEmpty = this.#checkIsEmptyGasTask();
//     const isStarted = this.#started;

//     if (!isEmpty && isStarted) {
//       const gasVolume = this.gasTank - 5;
//       this.#speed =
//         this.#speed + newSpeed > this.#maxSpeed ? this.#maxSpeed : newSpeed;
//       this.#gasTank = gasVolume < 0 ? 0 : gasVolume;
//     } else {
//       this.stop();
//     }

//     return this;
//   };
//   slowDown = (newSpeed) => {
//     this.speedUp(newSpeed);

//     return this;
//   };
//   addGas = (gas) => {
//     const gasVolume = this.#gasTank + gas;
//     this.#gasTank = gasVolume > this.#maxGas ? this.#maxGas : gasVolume;

//     return this;
//   };
// }

// const car = new Car("Tesla", "red", 3, 0, 10, false);

// class Bus extends Car {
//   constructor(model, color, age, speed, gasTank, started, maxPassenger) {
//     super(model, color, age, speed, gasTank, started);
//     this.maxPassenger = maxPassenger;
//   }
// }
