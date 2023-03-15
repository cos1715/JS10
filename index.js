class Vehicle {
  constructor({ power, gasTank, mass }) {
    this.power = power;
    this.gasTank = gasTank;
    this.gas = gasTank;
    this.mass = mass;
    this.#maxSpeed = this.#calculateMaxSpeed();
    this.#gasUsage = this.#calculateGasUsage();
  }
  started = false;
  speed = 0;
  #maxSpeed = 0;
  #gasUsage = 0;
  #speedMultiplier = 0.84;
  #calculateMaxSpeed = () => {
    return (this.#speedMultiplier * this.power) / this.mass;
  };
  #calculateGasUsage = () => {
    return Math.round((this.#maxSpeed / this.power) * 100);
  };
  #calculateUsedGas = (distance) => {
    return (distance * this.#gasUsage) / 100;
  };
  getMaxSpeed = () => {
    return this.#maxSpeed;
  };
  getGasUsage = () => {
    return this.#gasUsage;
  };
  startEngine = () => {
    this.started = true;
    return this;
  };
  stopEngine = () => {
    this.started = false;
    return this;
  };
  drive = (speed, distance) => {
    const gasUsed = this.#calculateUsedGas(distance);
    const gasDiff = this.gas - gasUsed;
    if (this.started) {
      if (speed > this.#maxSpeed) {
        this.speed = this.#maxSpeed;
      } else if (speed < 0) {
        this.speed = 0;
      } else {
        this.speed = speed;
      }
      this.gas = gasDiff <= 0 ? 0 : gasDiff;
    }
    return this;
  };

  addGas = (gas) => {
    const gasSum = this.gas + gas;
    this.gas = gasSum > this.gasTank ? this.gasTank : gasSum;
    return this;
  };

  printInfo() {
    const info = {
      power: this.power,
      gasTank: this.gasTank,
      gas: this.gas,
      mass: this.mass,
      maxSpeed: this.#maxSpeed,
      gasUsage: this.#gasUsage,
      started: this.started,
      speed: this.speed,
    };
    console.log(info);
    return info;
  }
}

class Car extends Vehicle {
  constructor({ type, maxPassengerCount, ...rest }) {
    super(rest);
    this.type = type;
    this.maxPassengerCount = maxPassengerCount;
  }
  printInfo() {
    const info = super.printInfo();
    const updatedInfo = {
      ...info,
      type: this.type,
      maxPassengerCount: this.maxPassengerCount,
    };
    console.log(updatedInfo);
    return updatedInfo;
  }
}

class Bus extends Car {
  constructor(config) {
    super(config);
  }
  passengerCount = 0;
  updatePassengers = (passengers) => {
    const passengersDiff = this.passengerCount + passengers;
    if (passengersDiff > this.maxPassengerCount) {
      this.passengerCount = this.maxPassengerCount;
    } else if (passengersDiff < 0) {
      this.passengerCount = 0;
    } else {
      this.passengerCount = passengersDiff;
    }
  };
  printInfo() {
    const info = super.printInfo();
    const updatedInfo = {
      ...info,
      passengerCount: this.passengerCount,
    };
    console.log(updatedInfo);
    return updatedInfo;
  }
}
