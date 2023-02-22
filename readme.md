# JS Homework

Feel free to modify test data or add new data
It will help for better testing

## Pyfagor

Capitalize every word in array

```javascript
capitalize("my name is taras");
// Should return
("My Name Is Taras");
```

## Show number in money format

+- sign should be present

```javascript
truncate("Lorem ipsum dolor sit amet, consectetur", 14);
// Lorem ipsum...

truncate("Lorem ipsum dolor sit amet, consectetur", 255);
// Lorem ipsum dolor sit amet, consectetur
```

## Format number in spaces

+- sign should be present

```javascript
filterRange(arr, from, to);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
filterRange(arr, 3, 7);
// 3,4,5,6,7
```

## Write a password generator with length n

Sort arr from least to biggest

```javascript
const arr = [324, 32423, -3242, 544, 0, 23, -454, 22, 4];
sortArr(arr);
// -3242, -454, 0, 4, 22, 23, 324, 544, 32423
```

## calculate percentage with n numbers after dot

Sort arr of strings from shortest to longest

```javascript
const arr = ["4534", "a", "bb", "sdfds", "", " ", "r4rdv-"];
sortArr(arr);
// '', ' ', 'a', 'bb', '4534', 'sdfds', 'r4rdv-'
```

## Get integer part of number and decimal

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

## Check if prime

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
