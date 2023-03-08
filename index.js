// const namesList = {
//   name: "Taras",
//   next: {
//     name: "Kateryna",
//     next: {
//       name: "Andriy",
//       next: {
//         name: "Julia",
//         next: null,
//       },
//     },
//   },
// };

// const printNames = (list) => {
//   console.log(list.name);
//   debugger;

//   if (list.next === null) {
//     return;
//   } else {
//     printNames(list.next);
//   }
// };

// printNames(namesList);

// const sumNumber = (n) => {

// };

// sumNumber(10);
// const obj = { a: 1 };

// console.log(obj);

const person = {
  eats: true,
  sleeps: true,
};

const andrii = {
  studies: true,
  __proto__: person,
};

const taras = Object.create(person, {
  studies: {
    value: true,
    enumerable: true,
    // writable: false,
    // configurable: false,
  },
});

// console.log(andrii);
// console.log(taras);

// const country = {
//   country: "Ukraine",
//   getCountry() {
//     console.log(this);
//     return this.country;
//   },
// };
// const city = {
//   city: "Kyiv",
//   __proto__: country,
// };
// const street = Object.create(city, {
//   street: { value: "Shevchenka", enumerable: true },
// });
// const house = {
//   number: 1,
//   __proto__: street,
// };

// console.log(house.getCountry());

const objA = {
  myMethod() {
    return 23;
  },
};

const objB = {
  myMethod() {
    return "string";
  },
  __proto__: objA,
};

objB.myMethod();

const cityPlan = {
  houses: [1, 2, 3, 4, 5],
  buildHouse(house) {
    this.houses = [...this.houses, house];
  },
};

const kyiv = Object.create(cityPlan);
const lviv = Object.create(cityPlan);
const khariv = Object.create(cityPlan);

khariv.buildHouse(6);

console.log(kyiv);

function Shape(color) {
  this.color = color;
}

function Square(color, sideA, sideB) {
  Shape.call(this, color);
  this.sideA = sideA;
  this.sideB = sideB;
}

Square.prototype = Shape.prototype;
Square.prototype.constructor = Square;
Square.prototype.getArea = function () {
  return this.sideA * this.sideB;
};

function Circle(color, radius) {
  Shape.call(this, color);
  this.radius = radius;
}

Circle.prototype = Shape.prototype;
Circle.prototype.constructor = Circle;
Circle.prototype.getArea = function () {
  return Math.PI * this.radius ** 2;
};

const rectangular = new Square("red", 4, 4);
const circle = new Circle("blue", 4, 4);
console.log(rectangular);
console.log(circle);
