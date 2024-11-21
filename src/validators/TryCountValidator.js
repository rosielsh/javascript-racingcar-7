import Validator from "./Validator";

class TryCountValidator {
  static validate(tryCount) {
    this.#validateType(tryCount);
    this.#validateValidNumber(tryCount);
  }

  static #validateType(tryCount) {
    if (Validator.isNotNumber(tryCount)) {
      throw new Error("[ERROR]");
    }
  }

  static #validateValidNumber(tryCount) {
    if (tryCount <= 0 || Validator.isInvalidNumber(tryCount)) {
      throw new Error("[ERROR]");
    }
  }
}

export default TryCountValidator;
