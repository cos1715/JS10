const animal = {
  eats: true,
  runs() {
    console.log(this);
    return "animal runs";
  },
  go() {
    console.log(this);
    return "animal goes";
  },
};
const rabbit = Object.create(animal, {
  jumps: { value: true, enumerable: true },
  go: {
    value: function () {
      console.log(this);
      return this.runs();
    },
  },
});

// rabbit.__proto__ = animal;

console.log("rabbit", rabbit.go());

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

const house = Object.create(flat, {
  house: {
    value: 1,
    enumerable: true,
  },
});

const flat = {
  flat: 1,
  __proto__: house,
};

const cityPlan = {
  houses: [1, 2, 3, 4, 5, 6],

  build(house) {
    this.houses.push(house);
    // this.houses = [food];
  },
};

const Kyiv = {
  __proto__: cityPlan,
};

const Lviv = {
  __proto__: cityPlan,
};

const mayor = {
  name: "",
  term: 4,
};

function Uzhorod(name) {
  this.name = name;
}

Uzhorod.prototype = mayor;
Uzhorod.prototype.fireMayor = function () {
  // update prototype
  this.name = "";
};

const uzhorod = new Uzhorod("Taras");
