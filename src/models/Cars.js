import Car from "./Car.js";

class Cars {
  #cars;
  #raceStrategy;

  constructor(names, raceStrategy) {
    this.#validate(names);
    this.#raceStrategy = raceStrategy;
    this.#cars = names.map((name) => new Car(name));
  }

  race() {
    const currentRaceInfo = [];

    this.#cars.forEach((car) => {
      if (this.#raceStrategy.canMove()) {
        car.move(1);
      }

      currentRaceInfo.push([car.getName(), car.getPosition()]);
    });

    return currentRaceInfo;
  }

  getCars() {
    return this.#cars;
  }

  #validate(names) {
    const set = new Set(names);

    if (names.length !== set.size) {
      throw new Error("[ERROR]");
    }
  }
}

export default Cars;
