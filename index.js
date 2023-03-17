class MockServer {
  static ms = 1000;
  static #users = [];
  static getAllUsers = () => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve(this.#users);
      }, this.ms)
    );
  };
  static getUser = (id) => {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        const user = this.#users.find((item) => item.id === id);
        if (user) {
          resolve(user);
        } else {
          reject(new Error("No user found"));
        }
      }, this.ms)
    );
  };
  static addUser = (user) => {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        if (user.id && user.name && user.age) {
          this.#users.push(user);
          resolve(true);
        } else {
          reject(new Error("Please use correct data"));
        }
      }, this.ms)
    );
  };
  static updateUser = (id, user) => {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        const userFound = this.#users.find((item) => item.id === id);
        if (userFound) {
          const updatedUser = { ...userFound, ...user };
          this.#users = this.#users.map((item) => {
            return item.id === id ? updatedUser : item;
          });

          resolve(updatedUser);
        } else {
          reject(new Error("No user found"));
        }
      }, this.ms)
    );
  };
  static deleteUser = (id) => {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        const index = this.#users.findIndex((item) => item.id === id);
        if (index > -1) {
          const updatedUsers = this.#users.filter((user) => user.id !== id);
          this.#users = updatedUsers;
          resolve(true);
        } else {
          reject(new Error("No user found"));
        }
      }, this.ms)
    );
  };
}

const asyncFunc = async (func, ...rest) => {
  try {
    console.log(...rest);
    const result = await func(...rest);
    console.log("result", result);
  } catch (err) {
    console.log("err", err);
  }
};

const promiseFunc = (func, ...rest) => {
  func(...rest)
    .then((result) => {
      console.log("result", result);
    })
    .catch((err) => {
      console.log("err", err);
    });
};

const createMultipleUsers = async (arr) => {
  try {
    const result = await Promise.all(
      arr.map((item) => MockServer.addUser(item))
    );
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

const createMultipleUsers2 = async (arr) => {
  const result = await Promise.allSettled(
    arr.map((item) => MockServer.addUser(item))
  );
  console.log(result);
};
