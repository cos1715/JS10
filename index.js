// ## Closure

function calculate(initialValue) {
  let currentValue = initialValue;

  return {
    add(n) {
      return (currentValue += n);
    },
    subtract(n) {
      return (currentValue -= n);
    },
    multiply(n) {
      return (currentValue *= n);
    },
    divide(n) {
      return (currentValue /= n);
    },
    reset() {
      return (currentValue = 0);
    },
  };
}

// ## Decorator

const obj = {
  num: 1,
  sum(num) {
    return this.num + num;
  },
};

const cachesDecorator = (func) => {
  const map = new Map();
  return function (num) {
    if (!map.has(num)) {
      const result = func.call(this, num);
      map.set(num, result);
    }
    return map.get(num);
  };
};

const sum = function (num) {
  return this.num + num;
};

const decoratedSum = cachesDecorator(sum);
console.log(decoratedSum.call(obj, 2));
console.log(decoratedSum.call(obj, 2));

const decoratedSum2 = cachesDecorator(obj.sum);
console.log(decoratedSum.call(obj, 3));
console.log(decoratedSum.call(obj, 3));
console.log(decoratedSum.call(obj, 33));

// ## Factorial recursion (optional)

const factorial = (initialNumber) => {
  return initialNumber === 2
    ? initialNumber
    : initialNumber * factorial(initialNumber - 1);
};

// const user = {};
// const number1 = 2;
// const number2 = 2;
// const arr = [1, 2];

// function bazz(first, last) {
//   const arr = [];
//   const number1 = 22;
//   const number2 = 22;
//   const bar = () => {
//     const number2 = 3;
//     return function () {
//       debugger;
//       const xxxx = {};
//       return number1 + number2 + number1;
//     };
//   };

//   const foo = bar();
//   return foo();
// }

// bazz();

let bazz = function () {
  let counter = 0;

  return function (n) {
    // console.log(arguments);
    counter = counter + n;
    return counter;
  };
};

const innerFunc = bazz();
const innerFunc2 = bazz();
// bazz = null;
// console.log(innerFunc(3));
// console.log(innerFunc(2));
// console.log(innerFunc(5));
// console.log(innerFunc2(50));

// let multiply = function (a) {
//   let sum = 0;

//   return function (b) {
//     // console.log(arguments);
//     sum = a * b;
//     return sum;
//   };
// };

// console.log(multiply(2)(2));
// function logThis() {
//   console.log(this);
// }

// const obj = {
//   a: 1,
//   bazz() {
//     this.a += 1;
//     return this.a;
//   },
// };

// function foo(func) {
//   const someValue = "result is";
//   return function () {
//     const result = func.call(this);
//     return `${someValue} ${result}`;
//   };
// }

// // const func = obj.bazz;
// // console.log(func());

// const myDecorator = foo(obj.bazz);

// console.log(myDecorator.call(obj));

function myFirstRecursion(from, to) {
  if (from === to) {
    return to;
  }
  const result = myFirstRecursion(from, to - 1);
  console.log("result", result);
  console.log("to", to);
  return result + to;
}

function fromTo(from, to) {
  let value = to;
  let sum = 0;
  while (true) {
    if (from === value) {
      sum += value;
      break;
    } else {
      sum += value;
      value--;
    }
  }
  return sum;
}

myFirstRecursion(2, 5);
