import MESSAGE from "../constants/Message.js";
import SETTING from "../constants/Setting.js";
import { generateError } from "../utils/generateError.js";
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
        car.move(SETTING.MOVE.UNIT);
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
      generateError(MESSAGE.ERROR.CAR.DUPLICATE_CAR);
    }
  }
}

export default Cars;
