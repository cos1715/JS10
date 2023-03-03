# JS Homework

Feel free to modify test data or add new data
It will help for better testing

## Unique values

Check if word in anagrams arr is anagram  
If you found anagram store this word in **set** or **map**  
Values in **set** or **map** should not repeat anagram of this word  
Also should not be present in **set** or **map**  
Try to optimize script by using check **has**  
Return collection **set** or **map**

Example: "actor" and "carot" are anagrams so store only "actor"

```javascript
const anagrams = [
  "actor",
  "carot",
  "listen",
  "enlist",
  "debit",
  "bidet",
  "tear",
  "rate",
  "night",
  "thing",
  "lives",
  "veils",
  "stressed",
  "desserts",
  "dormitory",
  "dirty room",
  "rescue",
  "secure",
  "a gentleman",
  "elegant man",
  "listen",
  "heart",
  "angel",
  "leader",
  "silent",
];

const unique = (arr) => {
  // your code
};

unique(anagrams);
// [
//   "actor",
//   "listen",
//   "debit",
//   "tear",
//   "night",
//   "lives",
//   "stressed",
//   "dormitory",
//   "rescue",
//   "a gentleman",
//   "heart",
//   "angel",
//   "leader",
// ];
```

## Getter and setter

Create an user object  
User should have to first name last name and age
Add userInfo getter which gets all info from obj  
Add userInfo setter to set all user info from string or obj  
String setter format 'Taras Samoilenko 25'

```javascript
const user = {
  firstName: "",
  lastName: "",
  age: "",
  // your getter and setter
};

user.userInfo = "Taras Samoilenko 25";
user.userInfo;
// "Taras Samoilenko is 25"

user.userInfo = { firstName: "Kate", lastName: "Karp", age: 22 };
user.userInfo;
// "Kate Karp is 22"
```

## Create arr method

Create obj with property from and to  
Create function createArr that reads obj properties and  
Creates new sorted arr with range from and to  
Assign this arr as obj property

Create 3 solutions
Solution 1 without **bind**, **call** or **apply**  
Solution 2 with **bind**
Solution 3 with **call** or **apply**

```javascript
const obj = {
  from: 1,
  to: 10,
};

const createArr = () => {
  // your code
};

obj.arr;
// [1, 2, 3, 4, 5, 6, 7, 8, 9];
```

## Constructor Function

Create a constructor function that creates car obj  
Obj should have properties **model**, **color**, **age**, **speed**, **gasTank** and **started**
Obj should have methods **startEngine**, **drive**, **stop**, **speedUp**, **slowDown**, **addGas**
This methods should be chainable  
**startEngine** method checks if car has **gas** (you can create another method for checking **gas**)  
If **gas** is not empty set property **started** to true  
**drive** method should do smth only if property **started** is true and **gas** is no 0  
if **started** true increase **speed** to 30  
**stop** method sets property **started** to false  
**speedUp** method increases **speed** by arg. Max speed is 200  
Each **speedUp** method decreases **gas** by 5. Max gas is 20
If **gas** is empty **stop** car  
speedUp(5) adds 5 to speed  
**slowDown** works like speedUp but decreases **speed**. Min speed is 0  
**addGas** method adds **gas** to car by arg  
addGas(5) adds 5 to gas

```javascript
function Car(model, color, age, speed, and gasTank, started){
  // your code
};
```
