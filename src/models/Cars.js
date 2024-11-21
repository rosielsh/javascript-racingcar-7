import Car from "./Car";

class Cars {
  #cars;
  #raceStrategy;

  constructor(names, raceStrategy) {
    this.#validate(names);
    this.#raceStrategy = raceStrategy;
    this.#cars = names.map((name) => new Car(name));
  }

  race() {
    const position = [];

    this.#cars.forEach((car) => {
      if (this.#raceStrategy.canMove()) {
        car.move(1);
        position.push(car.getPosition());
      }
    });

    return position;
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
