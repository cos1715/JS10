const start = Date.now();

const map = new Map();

const formatMoney = (num) => {
  const sign = num > 0 ? "+" : num < 0 ? "-" : "";
  const absNum = Math.abs(num);
  const fixedNumber = absNum.toFixed(2);
  const [int, dec = "00"] = fixedNumber.split(".");
  let counter = 0;
  const formatedIntArr = int.split("").reduceRight((acc, item, index) => {
    if (counter === 2 && index !== 0) {
      acc.push(item, ",");
      counter = 0;
    } else {
      acc.push(item);
      counter++;
    }
    return acc;
  }, []);
  const formatedInt = formatedIntArr.reverse().join("");

  return `${sign} ${formatedInt}.${dec}`;
};

const cacheFormat = (num) => {
  let result;
  if (map.has(num)) {
    result = map.get(num);
  } else {
    result = formatMoney(num);
    map.set(num, result);
  }
  return result;
};

for (let i = 0; i < 100000000; i++) {
  const random = Math.floor(Math.random() * 1000) + 1;
  cacheFormat(random);
}

const end = Date.now();

console.log(end - start);
console.log(map);
