// Capitalize words

// const capitalize = (str) => {
//   return str.replace(/(^|\s)[a-z]/g, (letter) => letter.toUpperCase());
// };
const capitalize = (str) => {
  const arr = str.split(" ");
  const capitalizedArr = arr.map((word) => {
    const firstLetter = word.slice(0, 1).toUpperCase();
    const restWord = word.slice(1);
    return `${firstLetter}${restWord}`;
  });

  return capitalizedArr.join(" ");
};

capitalize("my name is taras");

// Text truncate

const truncate = (str, maxWidth) => {
  return str.length <= maxWidth ? str : `${str.slice(0, maxWidth - 3)}...`;
};

truncate("Lorem ipsum dolor sit amet, consectetur", 14);
truncate("Lorem ipsum dolor sit amet, consectetur", 255);

// Filter arr

const filterRange = (arr, from, to) => {
  return arr.filter((item) => item >= from && item <= to);
};

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
filterRange(numArr, 3, 7);

// Sort arr

const sortArr = (arr) => arr.sort((a, b) => a - b);

const arrToSort = [324, 32423, -3242, 544, 0, 23, -454, 22, 4];
sortArr(arrToSort);

// Sort arr str

const sortStringArr = (arr) => arr.sort((a, b) => a.length - b.length);

const stringArr = ["4534", "a", "bb", "sdfds", "", " ", "r4rdv-"];
sortStringArr(arr);

// Calculate average age of users older then 17 and younger then 55

const usersArr = [
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

// const averageAge = (arr) => {
//   let filteredCount = 0;
//   const sum = arr.reduce((acc, item) => {
//     if (item.age > 17 && item.age < 55) {
//       filteredCount++;
//       acc += item.age;
//     }
//     return acc;
//   }, 0);

//   return sum / filteredCount;
// };
const averageAge = (arr) => {
  const filteredArr = arr.filter((item) => item.age > 17 && item.age < 55);
  const sum = filteredArr.reduce((acc, item) => (acc += item.age), 0);

  return sum / filteredArr.length;
};
averageAge(usersArr);

// Sort arr by name

const sortUsers = (arr) => {
  return arr.sort((a, b) => {
    const textA = a.name.toUpperCase();
    const textB = b.name.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : a.age - b.age;
  });
};

sortUsers(usersArr);

// Find min and max

const minMaxAge = (arr) => {
  return arr.reduce(
    (acc, item) => {
      acc.min = item.age < acc.min ? item.age : acc.min;
      acc.max = item.age > acc.max ? item.age : acc.max;

      return acc;
    },
    { min: Infinity, max: -Infinity }
  );
};

minMaxAge(usersArr);

// Save only unique values

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

const unique = (arr) => {
  const uniqueArr = [];
  arr.forEach((str) => !uniqueArr.includes(str) && uniqueArr.push(str));

  return uniqueArr;
};

unique(strings);
