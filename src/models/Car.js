import MESSAGE from "../constants/Message.js";
import SETTING from "../constants/Setting.js";
import { generateError } from "../utils/generateError.js";

class Car {
  #name;
  #position;

  constructor(name) {
    this.#validate(name);
    this.#name = name;
    this.#position = SETTING.CAR.INITIAL_POSITION;
  }

  move(position) {
    if (this.#position + position < SETTING.CAR.INITIAL_POSITION) {
      generateError(MESSAGE.ERROR.CAR.INVALID_MOVE);
    }

    this.#position += position;
  }

  getPosition() {
    return this.#position;
  }

  getName() {
    return this.#name;
  }

  #validate(name) {
    if (name.length < SETTING.CAR.MIN_NAME_LENGTH || name.length > SETTING.CAR.MAX_NAME_LENGTH) {
      generateError(MESSAGE.ERROR.CAR.INVALID_LENGTH);
    }
  }
}

export default Car;
