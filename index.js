// ## Get days in year

const getDaysInYear = (year) => {
  return (year % 4 === 0 && year % 100 > 0) || year % 400 == 0 ? 366 : 365;
};

// const getDaysInYear = (year) => {
//   let days = 0;
//   for (let i = 0; i < 12; i++) {
//     const date = new Date(year, i, 0);
//     days += date.getDate();
//   }

//   return days;
// };

// ## Get day of a year

const getDayNumber = (date) => {
  const dates = new Date(date);
  const msDiff = Math.floor(dates - new Date(dates.getFullYear(), 0, 0));

  return msDiff / 1000 / 60 / 60 / 24;
};

// ## Get fiscal quarters

const monthsArr = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const quarters = ["I", "II", "III", "IV"];

const getQuarters = (date) => {
  const dateObj = new Date(date);
  const month = monthsArr[dateObj.getMonth()];
  const day = dateObj.getDate();
  const quarter = quarters[Math.floor(dateObj.getMonth() / 3)];

  return `${month} ${day} is ${quarter} quarter`;
};

// ## Write a function to calculate date diff

const monthDiff = (d1, d2) => {
  let months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
};

// Then we multiply the year difference by 12 to convert that to months.
// Then we subtract the month from the start date.
// And then we add the month from the end date.

const calcDateDiff = (startDate, endDate) => {
  let str = "";
  const startDateObj = new Date(startDate);
  const endDateObj = new Date(endDate);
  const msDiff = endDateObj - startDateObj;
  const minutes = msDiff / 1000 / 60;
  const hours = minutes / 60;
  const days = Math.floor(hours / 24);
  const month = monthDiff(startDateObj, endDateObj);
  const years = endDateObj.getFullYear() - startDateObj.getFullYear();

  if (minutes <= 60 && hours === 0) {
    str = `${minutes} minutes`;
  } else if (hours < 24) {
    const wholeHours = Math.floor(hours);
    const restMinutes = minutes - wholeHours * 60;
    str = `${wholeHours} hours ${restMinutes} minutes`;
  } else if (days > 0 && month <= 0) {
    str = `${days} days`;
  } else if (month > 0 && years <= 0) {
    str = `${month} months`;
  } else {
    str = `${years} years`;
  }

  return str;
};

// ## Create a map

const createMap = (arr = []) => {
  const map = new Map();

  arr.forEach((obj) => {
    map.set(obj.id, obj);
  });

  return map;
};

createMap([
  { id: 1, value: 1, date: "2022-02-15" },
  { id: 2, value: 1242, date: "2023-02-15" },
  { id: 3, value: 3342, date: "2021-02-15" },
]);

// ## Create a cache

const cache = new Map();
const cacheCalcDateDiff = (startDate, endDate) => {
  const key = `${startDate}-${endDate}`;
  if (cache.has(key)) {
    cache.get(key);
  } else {
    cache.set(key, calcDateDiff(startDate, endDate));
  }
};
