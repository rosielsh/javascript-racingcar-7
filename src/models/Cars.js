import { Random } from "@woowacourse/mission-utils";
import Car from "./Car";

class Cars {
  #cars;

  constructor(names) {
    this.#validate(names);
    this.#cars = names.map((name) => new Car(name));
  }

  race() {
    const position = [];

    this.#cars.forEach((car) => {
      if (Random.pickNumberInRange(0, 9) >= 4) {
        car.move(1);
        position.push(car.getPosition());
      }
    });

    return position;
  }

  #validate(names) {
    const set = new Set(names);

    if (names.length !== set.size) {
      throw new Error("[ERROR]");
    }
  }
}

export default Cars;
