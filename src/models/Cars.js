import Car from "./Car";

class Cars {
  #cars;

  constructor(names) {
    this.#cars = names.map((name) => new Car(name));
  }
}

export default Cars;
