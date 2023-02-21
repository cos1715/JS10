# JS Homework

## Equation

Write a function for quadratic equation
User should enter a, b, c via prompt
Print x1 and x2 or No possible solution

```javascript
solveQuadraticEquation(a, b, c);
```

## Factorial

Write a function for finding factorial
User should enter n via prompt
Factorial should be counted for n
n!

```javascript
findFactorial(n);
```

## Fibonacci

Write a function for printing Fibonacci numbers
User should enter n via prompt
List of numbers should be equal of n

```javascript
findFactorial(n);
```

## Pyramid

Write a function that prints a pyramid of height n
n will be entered by the user
The pyramid should look like this

-----#----- //1
----###---- //2
---#####--- //3
--#######-- //4
-#########- //5
#######№### //6

```javascript
printPyramid(n);
```

## Text truncate

Truncate text if it's length is bigger then maxlength and add '...' at the end.
Resulted str with dots have to be equal to maxlength

```javascript
truncate("Lorem ipsum dolor sit amet, consectetur", 14);
// Lorem ipsum...

truncate("Lorem ipsum dolor sit amet, consectetur", 255);
// Lorem ipsum dolor sit amet, consectetur
```

## Filter arr

Return arr of numbers with values that are in range from 'from' param and to 'to' param

```javascript
filterRange(arr, from, to);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
filterRange(arr, 3, 7);
// 3,4,5,6,7
```

## Sort arr

Sort arr from least to biggest

```javascript
const arr = [324, 32423, -3242, 544, 0, 23, -454, 22, 4];
sortArr(arr);
// -3242, -454, 0, 4, 22, 23, 324, 544, 32423
```

## Sort arr str

Sort arr of strings from shortest to longest

```javascript
const arr = ["4534", "a", "bb", "sdfds", "", " ", "r4rdv-"];
sortArr(arr);
// '', ' ', 'a', 'bb', '4534', 'sdfds', 'r4rdv-'
```

## Calculate average age of users older then 17 and younger then 55

```javascript
const arr = [
  { name: "John", age: 25 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 29 },
  { name: "Taras", age: 25 },
  { name: "Kate", age: 74 },
  { name: "Chris", age: 14 },
  { name: "Alan", age: 5 },
  { name: "Boris", age: 55 },
  { name: "Elizabeth", age: 48 },
];

averageAge(arr);
// 31.4
```

## Sort arr by name

Sort arr by name if 2 elements have same name sort by age

```javascript
const arr = [
  { name: "John", age: 25 },
  { name: "John", age: 5 },
  { name: "John", age: 2 },
  { name: "John", age: 45 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 29 },
  { name: "Mary", age: 2 },
  { name: "Taras", age: 25 },
  { name: "Taras", age: 19 },
  { name: "Kate", age: 74 },
  { name: "Chris", age: 14 },
  { name: "Alan", age: 5 },
  { name: "Alan", age: 32 },
  { name: "Boris", age: 55 },
  { name: "Elizabeth", age: 48 },
  { name: "Elizabeth", age: 8 },
];

sortUsers(arr);
// [
//   { name: "Alan", age: 5 },
//   { name: "Alan", age: 32 },
//   { name: "Boris", age: 55 },
//   { name: "Chris", age: 14 },
//   { name: "Elizabeth", age: 8 },
//   { name: "Elizabeth", age: 48 },
//   { name: "John", age: 2 },
//   { name: "John", age: 5 },
//   { name: "John", age: 25 },
//   { name: "John", age: 45 },
//   { name: "Kate", age: 74 },
//   { name: "Mary", age: 2 },
//   { name: "Mary", age: 29 },
//   { name: "Pete", age: 30 },
//   { name: "Taras", age: 19 },
//   { name: "Taras", age: 25 },
// ];
```

## Find min and max

Find min and max and return obj {min, max}
Use reduce method

```javascript
const arr = [
  { name: "John", age: 25 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 29 },
  { name: "Taras", age: 25 },
  { name: "Kate", age: 74 },
  { name: "Chris", age: 14 },
  { name: "Alan", age: 5 },
  { name: "Boris", age: 55 },
  { name: "Elizabeth", age: 48 },
];

minMaxAge(arr);
// {min:5, max:74}
```

## Save only unique values

Save unique values from arr to uniqueArr

```javascript
const strings = [
  "Привіт",
  "Світ",
  "Привіт",
  "Світ",
  "Привіт",
  "Привіт",
  "Світ",
  "Світ",
  ":-O",
];

unique(strings);
// Привіт, Світ, :-O
```
