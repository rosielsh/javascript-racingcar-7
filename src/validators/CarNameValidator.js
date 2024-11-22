import MESSAGE from "../constants/Message.js";
import { generateError } from "../utils/generateError.js";

class CarNameValidator {
  static validate(carNames) {
    this.#validateIsArray(carNames);
    this.#validateType(carNames);
    this.#validateLength(carNames);
    this.#validateDuplicate(carNames);
  }

  static #validateIsArray(carNames) {
    if (!Array.isArray(carNames)) {
      generateError(MESSAGE.ERROR.CAR_NAME.NOT_ARRAY);
    }
  }

  static #validateType(carNames) {
    if (!carNames.every((name) => typeof name === "string")) {
      generateError(MESSAGE.ERROR.CAR_NAME.INVALID_TYPE);
    }
  }

  static #validateLength(carNames) {
    if (carNames.some((name) => name.length > 5)) {
      generateError(MESSAGE.ERROR.CAR_NAME.INVALID_LENGTH);
    }
  }

  static #validateDuplicate(carNames) {
    if (new Set(carNames).size !== carNames.length) {
      generateError(MESSAGE.ERROR.CAR.DUPLICATE_CAR);
    }
  }
}

export default CarNameValidator;
