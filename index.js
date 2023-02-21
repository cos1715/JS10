{
  // Equation;
  const a = +prompt("a");
  const b = +prompt("b");
  const c = +prompt("c");

  if (a) {
    const d = b * b - 4 * a * c;
    let x1;
    let x2;

    if (d > 0) {
      x1 = (-b + Math.sqrt(d)) / (2 * a);
      x2 = (-b - Math.sqrt(d)) / (2 * a);
      console.log(`solution x1=${x1} x2=${x2}`);
    }
    if (d === 0) {
      const result = (-1 * b) / (2 * a);
      x1 = result;
      x2 = result;
      console.log(`solution x1=${x1} x2=${x2}`);
    }
    if (d < 0) {
      console.log("Can't calculate");
    }
  } else {
    console.log("Can't calculate");
  }
}

{
  // Factorial;
  const num = +prompt();
  let factorial = num;
  if (num >= 0) {
    for (let i = 1; i < num; i++) {
      factorial *= i;
    }
    console.log(factorial);
  } else {
    console.log("Can't calculate");
  }
}

{
  // Fibonacci;
  const num = +prompt("a");
  let firstNum = 0;
  let secondNum = 1;
  let nextNum = firstNum + secondNum;

  if (num > 0) {
    let fibSeq = ``;
    for (let i = 1; i <= num; i++) {
      nextNum = firstNum + secondNum;
      firstNum = secondNum;
      secondNum = nextNum;
      fibSeq = `${fibSeq} ${firstNum}`;
    }
    console.log(fibSeq);
  } else {
    console.log("Enter number bigger than 0");
  }
}

{
  // Pyramid;
  const rows = +prompt();
  let cageLength = 1;
  let dashLength = rows - cageLength;

  for (let i = 0; i < rows; i++) {
    let dashes = ``;
    let cages = ``;
    for (let j = 0; j < dashLength; j++) {
      dashes = `${dashes}-`;
    }
    for (let j = 0; j < cageLength; j++) {
      cages = `${cages}#`;
    }
    console.log(`${dashes}${cages}${dashes}`);
    cageLength += 2;
    dashLength--;
  }
}
