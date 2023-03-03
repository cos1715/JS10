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

const uniqueResult = unique(anagrams);
