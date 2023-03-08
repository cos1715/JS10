# JS Homework

Feel free to modify test data or add new data
It will help for better testing

## Prototype inheritance

Create a prototype chain
Inherit from university obj with universityName and dean properties  
Create faculty obj with facultyName and groups arr properties and method enlistStudent into groups  
Group can contain only 12 students

```javascript
const university = {
  // your code
};

const faculty = {
  // your code
};

faculty.universityName;
// Polytechnic

faculty.enlistStudent("Taras");
faculty.groups;
// [['Taras']]
```

## Prototype constructor

Create a basic Shape that has color property and a getArea() method.  
Create two sub objects, Rectangle and Circle, that inherit the properties and methods of the Shape.  
The Rectangle class must have width and height properties, and the getArea() method must return the area of the rectangle.  
The Circle class must have a radius property, and the getArea() method must return the area of the circle.

```javascript
function Shape(color) {
  // your code
}

function Rectangle(color, width, height) {
  // your code
}

function Circle(color, radius) {
  // your code
}
```

## Fibonacci recursion

Create a function that prints last number from sequence  
Start from 1  
Try with big numbers (100, 200)

```javascript
const fibonacci = (n) => {
  // your code
};

fibonacci(7);
// 13
```

## Fibonacci recursion with cache (Optional)

Create a decorator for fibonacci function and cache result  
Try with big numbers (100, 200)

```javascript
const cacheDecorator = (func) => {
  // your code
};

decoratedSum(7);
// 13
```
