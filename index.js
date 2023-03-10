// ## Prototype inheritance

const university = {
  universityName: "My Own university",
  dean: "Bohdan",
};
const faculty = Object.create(university, {
  facultyName: {
    value: "cs",
    enumerable: true,
  },
  groups: {
    value: [],
    enumerable: true,
  },
  enlistStudent: {
    value: function (studentName) {
      const lastGroup = this.groups[this.groups.length - 1] || [];
      if (lastGroup.length !== 12) {
        lastGroup.push(studentName);
        if (!this.groups.length) {
          this.groups.push(lastGroup);
        }
      } else {
        this.groups.push([studentName]);
      }
    },
  },
});

// ## Prototype constructor
function Shape(color) {
  this.color = color;
}
Shape.prototype.getColor = function () {
  return this.color;
};

function Rectangle(color, width, height) {
  Shape.call(this, color);
  this.width = width;
  this.height = height;
  this.area;
}
function Circle(color, radius) {
  Shape.call(this, color);
  this.radius = radius;
  this.area;
}
// Added this to get values from Shape.prototype
// Object.create is used to separate prototypes
// Without Object.create we will have one prototype for everything
// And when we add method getArea to Circle we override method for Rectangle
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.getArea = function () {
  return this.width * this.height;
};

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.getArea = function () {
  return (Math.PI * this.radius ** 2).toFixed(2);
};

const square = new Rectangle("green", 8, 8);
const rectangle = new Rectangle("blue", 6, 3);
square.getArea();
rectangle.getArea();
const circle = new Circle("yellow", 4);
circle.getArea();

// ## Fibonacci recursion
const fibonacci = (n) => {
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
};

// ## Fibonacci recursion with cache (Optional)
const fibonacciWithCache = (n, cache) => {
  if (!cache.has(n)) {
    if (n <= 1) {
      cache.set(n, 1);
    } else {
      const result =
        fibonacciWithCache(n - 1, cache) + fibonacciWithCache(n - 2, cache);
      cache.set(n, result);
    }
  }
  return cache.get(n) || 1;
};
const cache = (func) => {
  const map = new Map();
  return (n) => {
    if (!map.has(n)) {
      func(n, map);
    }
    return map.get(n);
  };
};
const fibFunc = cache(fibonacciWithCache);
