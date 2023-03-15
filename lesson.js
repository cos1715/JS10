const start = Date.now();

setInterval(() => {
  const date = new Date();
  const hours = `${date.getHours()}`.padStart(2, 0);
  const minutes = `${date.getMinutes()}`.padStart(2, 0);
  const seconds = `${date.getSeconds()}`.padStart(2, 0);
  console.log(`${hours}:${minutes}:${seconds}`);
}, 1000);

let timerId;
const interval = () => {
  const end = Date.now();
  console.log("end-start", end - start);
  if (end - start > 10_000) {
    clearTimeout(timerId);
  } else {
    timerId = setTimeout(interval, 1000);
  }
};

setTimeout(interval, 1000);

const print = () => {
  console.log("hello");
};

const foo = (func, ms) => {
  setTimeout(func, ms);
};

foo(print, 1000);

let i = 0;
while (i < 3) {
  i++;
  let j = i;
  setTimeout(() => {
    console.log(j);
  }, 200);
}

const promise = new Promise((resolve, reject) => {
  resolve(1);
  reject("rejected");
});

promise
  .then((data) => {
    console.log("then", data);
    return data * 2;
  })
  .then((data) => {
    console.log("then", data);
    return data * 2;
  })
  .then((data) => {
    console.log("then", data);
    return data * 2;
  })
  .then((data) => {
    console.log("then", data);
    return data * 2;
  })
  .then((data) => {
    console.log("then", data);
    return data * 2;
  })
  .then((data) => {
    console.log("then", data);
    return data * 2;
  })
  .then((data) => {
    console.log("then", data);
    return data * 2;
  })
  .then((data) => {
    console.log("then", data);
    return data * 2;
  })
  // .catch((err) => {
  //   console.log("catch", err);
  // })
  // .catch((err) => {
  //   console.log("catch 2", err);
  //   return 2;
  // })
  .then((data) => {
    return new Promise((resolve, reject) => {
      reject(2);
    });
  })
  .then((data) => {
    console.log("inner promise", data);
    return data * 3;
  })
  .then((data) => {
    console.log("inner promise 2", data);
    return data * 3;
  })
  // .catch((err) => {
  //   console.log("catch 3", err);
  // })
  // .catch((err) => {
  //   console.log("catch 4", err);
  // })
  // .catch((err) => {
  //   console.log("catch 5", err);
  // })
  .finally(() => {
    console.log("finally");
  })
  .finally(() => {
    console.log("finally");
  })
  .finally(() => {
    console.log("finally");
  })
  .finally(() => {
    console.log("finally");
  });
console.log(promise);

const bazz = (ms) => {
  return new Promise((resolve, reject) => {
    const timerId = setTimeout(() => {
      resolve();
    }, ms);
    if (ms > 5000) {
      clearTimeout(timerId);
      reject();
    }
  });
};

bazz(6000)
  .then(() => {
    console.log("in then");
  })
  .catch((err) => {
    console.log("in catch");
  });

const arr = [
  { id: 1, name: "Taras", age: 20 },
  { id: 2, name: "Andrii", age: 15 },
];

const getData = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = arr.find((item) => item.id === id);
      if (user) {
        resolve(user);
      } else {
        reject(new Error("No user Found"));
      }
    }, 100);
  });
};

const asyncFunc = async (id) => {
  // debugger;
  // try {
  try {
    const user = await getData(id);
    const myError = new Error("my error");

    throw "1221";
    console.log("after error");
  } catch (err) {
    console.log(err);
  } finally {
    console.log("finally");
  }
  // console.log(user);
  // } catch (err) {
  console.log(err);
  // }
};

asyncFunc(1).catch((err) => {
  console.log(err);
});

const p1 = getData(11);
const p2 = getData(22);

Promise.any([p1, p2])
  .then((data) => {
    console.log("promise.allSettled then", data);
  })
  .catch((err) => {
    console.log("promise.allSettled catch", err);
  });

getData(1)
  .then((user) => {
    console.log("then", user);
  })
  .catch((err) => {
    console.log("catch", err);
  });

try {
  const p1 = getData(11);
  throw new Error("message");
  const p2 = getData(22);
  console.log("try");
} catch (err) {
  console.log("err", err);
} finally {
  console.log("finally");
}
