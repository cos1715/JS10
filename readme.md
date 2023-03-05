# JS Homework

Feel free to modify test data or add new data
It will help for better testing

## Closure

Create a calculate() function that takes an initial number as an argument  
and returns methods add(), subtract(), multiply(), divide() and reset()  
each of which takes a number as an argument and returns  
the result of the corresponding arithmetic operation on numbers

```javascript
const calculate = (initialNumber) => {
  // your code
};

const calculator = calculate(5);
calculator.add(5);
// 10
```

## Decorator

Create a decorator that caches function result  
decorator receives a function as param.  
If result in cache return value from cache  
Test this solution with different types of functions  
Code below is just an example you can modify it for your solution

```javascript
const cachesDecorator = (func) => {
  // your code
};

const obj = {
  num1: 1,
  num2: 2,
  sum() {
    return this.num1 + this.num2;
  },
};

const sum = () => {
  return this.num1 + this.num2;
};

const decoratedSum = cachesDecorator(sum);
decoratedSum();
// 3

const decoratedSum = cachesDecorator(obj.sum);
decoratedSum();
// 3
```

## Factorial recursion (optional)

Count factorial by using recursion

```javascript
const factorial = (initialNumber) => {
  // your code
};

factorial(5);
// 120
```
