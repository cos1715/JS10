// ## Unique values

const sortAnagram = (word) => {
  const sortedArr = word.split("").sort();
  return sortedArr.join("").trim();
};

const unique = (arr) => {
  const map = new Map();
  arr.forEach((item) => {
    const sortedAnagram = sortAnagram(item);
    if (!map.has(sortedAnagram)) {
      map.set(sortedAnagram, item);
    }
  });

  return { map, arr: map.values() };
};

// const unique = (arr) => {
//   const sortedAnagramsArr = arr.map((item) => sortAnagram(item));
//   const set = new Set(sortedAnagramsArr);
//   const uniqueArr = [];
//   set.forEach((item) => {
//     const foundAnagram = arr.find((word) => {
//       const anagram = sortAnagram(word);
//       return item === anagram;
//     });
//     uniqueArr.push(foundAnagram);
//   });

//   return { set, arr: uniqueArr };
// };

// ## Getter and setter

const user = {
  firstName: "",
  lastName: "",
  age: "",
  get userInfo() {
    return `${this.firstName} ${this.lastName} is ${this.age}`;
  },
  set userInfo(arg) {
    if (typeof arg === "string") {
      const [firstName, lastName, age] = arg.split(" ");
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    } else {
      this.firstName = arg.firstName;
      this.lastName = arg.lastName;
      this.age = arg.age;
    }
  },
};

// ## Create arr method

const obj = {
  from: 1,
  to: 10,
};

function createArr() {
  const arr = [];
  for (let i = this.from; i < this.to; i++) {
    arr.push(i);
  }
  this.arr = arr;
}

obj.createArr = createArr;
obj.createArr();
const createArrBind = createArr.bind(obj);
createArrBind();
createArr.call(obj);

// ## Constructor Function

function checkIsEmptyGasTask() {
  return this.gasTank === 0;
}

function startEngine() {
  this.started = !this.checkIsEmptyGasTask();

  return this;
}

function drive() {
  const isEmpty = this.checkIsEmptyGasTask();
  const isStarted = this.started;
  if (!isEmpty && isStarted) {
    this.speed = 30;
  }

  return this;
}

function stop() {
  this.started = false;
  this.speed = 0;

  return this;
}

function speedUp(newSpeed) {
  const isEmpty = this.checkIsEmptyGasTask();
  const isStarted = this.started;

  if (!isEmpty && isStarted) {
    const gasVolume = this.gasTank - 5;
    this.speed =
      this.speed + newSpeed > this.maxSpeed ? this.maxSpeed : newSpeed;
    this.gasTank = gasVolume < 0 ? 0 : gasVolume;
  } else {
    this.stop();
  }

  return this;
}

// function slowDown(newSpeed) {
//   this.speedUp(newSpeed);

//   return this;
// }

function addGas(gas) {
  const gasVolume = this.gasTank + gas;
  this.gasTank = gasVolume > this.maxGas ? this.maxGas : gasVolume;

  return this;
}

function Car(model, color, age, speed, gasTank, started) {
  this.model = model;
  this.color = color;
  this.age = age;
  this.speed = speed;
  this.maxSpeed = 200;
  this.gasTank = gasTank;
  this.maxGas = 20;
  this.started = started;
  this.checkIsEmptyGasTask = checkIsEmptyGasTask;
  this.startEngine = startEngine;
  this.drive = drive;
  this.stop = stop;
  this.speedUp = speedUp;
  this.slowDown = function (newSpeed) {
    this.speedUp(newSpeed);

    return this;
  };
  this.addGas = addGas;
}

const car = new Car("Tesla", "red", 3, 0, 10, false);
