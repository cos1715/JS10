const person = {
  eats: true,
  sleeps: true,
  learn() {
    console.log(this);
    return "person runs";
  },
  walk() {
    console.log(this);
    return "person goes";
  },
};
const taras = Object.create(person, {
  studies: { value: true, enumerable: true },
  walk: {
    value: function () {
      console.log(this);
      return this.runs();
    },
  },
});

// person.__proto__ = taras;

console.log("taras", rabbit.walk());

// chain inheritance
const country = {
  country: "Ukraine",
};

const city = {
  city: "Kyiv",
  __proto__: country,
};

const street = {
  street: "Shevchenka",
  __proto__: city,
};

const house = Object.create(street, {
  house: {
    value: 1,
    enumerable: true,
  },
});

const flat = {
  flat: 1,
  __proto__: house,
};

// how to fix this error
const cityPlan = {
  houses: [1, 2, 3, 4, 5, 6],

  build(house) {
    this.houses.push(house);
    // this.houses = [house];
  },
};

const Kyiv = {
  __proto__: cityPlan,
};

const Lviv = {
  __proto__: cityPlan,
};

// function constructor

function Mayor(name) {
  this.name = name;
  this.term = 4;
}

// Ми використовуємо Mayor.call(this, name) для того, щоб успадкувати властивості name, term від батьківського конструктора.
// Таким чином, ми можемо використовувати ці властивості в нашому конструкторі Uzhorod, не дублюючи код
function Uzhorod(name) {
  Mayor.call(this, name);
}

Uzhorod.prototype = Mayor.prototype; // we don't need func as prototype we need obj
Uzhorod.prototype.constructor = Uzhorod; // is needed because when we set prototype we change constructor

// without upper line
// uzhorod.constructor === Uzhorod
// false

// This line adds function to all as prototype
// not like a property

Uzhorod.prototype.fireMayor = function () {
  // update prototype
  this.name = "";
};

const uzhorod = new Uzhorod("Taras");

const list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printList(list) {
  alert(list.value); // виведіть поточний елемент

  if (list.next) {
    printList(list.next); // зробіть те ж саме для решти списку
  }
}

const company = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 1600 },
  ],
  development: {
    sites: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};
const read = (obj) => {
  const keys = Object.keys(obj);
  const sum = keys.reduce((acc, key) => {
    if (Array.isArray(obj[key])) {
      return (
        acc +
        obj[key].reduce((innerAcc, item) => {
          return innerAcc + item.salary;
        }, 0)
      );
    } else {
      return acc + read(obj[key]);
    }
  }, 0);

  return sum;
};
