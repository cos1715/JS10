// ## Pythagorean

const pythagorean = (a, b) => {
  return Math.sqrt(a ** 2 + b ** 2).toFixed(2);
};

// ## Show number in money format

const formatMoney = (num) => {
  const sign = num > 0 ? "+" : num < 0 ? "-" : "";
  const absNum = Math.abs(num).toFixed(2);
  const [int, dec] = `${absNum}`.split(".");
  let thousandCounter = 0;
  const formattedIntArr = int.split("").reduceRight((acc, item, index) => {
    if (thousandCounter === 2 && index !== 0) {
      acc.push(item, ",");
      thousandCounter = 0;
    } else {
      acc.push(item);
      thousandCounter++;
    }
    return acc;
  }, []);
  const formattedInt = formattedIntArr.reverse().join("");
  const formattedDec = dec ? `.${dec}` : "";

  return `${sign} ${formattedInt}${formattedDec}`;
};
// const num = new Intl.NumberFormat('en-US').format(12321321);
// (2312).toLocaleString()

// ## Show number in money format

const formatNumber = (num) => {
  const sign = num > 0 ? "+" : num < 0 ? "-" : "";
  const [int, dec] = num.toString().split(".");
  const formattedInt = int.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  const formattedDec = dec ? `.${dec}` : "";

  return `${sign} ${formattedInt}${formattedDec}`;
};

// ## Write a password generator with length n

const generatePassword = (n) => {
  let password = "";

  for (let i = 0; i < n; i++) {
    const code = Math.floor(Math.random() * (123 - 33)) + 33;
    const char = String.fromCharCode(code);
    password = `${password}${char}`;
  }

  return password;
};

// ## Calculate percentage with n numbers after dot

const calc = (firstNum, secondNum, precision) => {
  const percentage = (secondNum * 100) / firstNum;
  return percentage.toFixed(precision);
};

// ## Get integer part of number and decimal

const splitNumber = (num) => {
  const [int = 0, decimal = 0] = num.toString().split(".");
  return { int, decimal };
};

// ## Check if prime

const isPrime = (n) => {
  let prime = true;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      prime = false;
      break;
    }
  }

  return prime;
};

// ## Check if number is Armstrong Number

const isArmstrong = (n) => {
  const armstrongNumber = `${n}`.split("").reduce((acc, item) => {
    return acc + item ** 3;
  }, 0);

  return n === armstrongNumber;
};
