import Validator from "./Validator.js";

class TryCountValidator {
  static validate(tryCount) {
    this.#validateType(tryCount);
    this.#validateValidNumber(tryCount);
  }

  static #validateType(tryCount) {
    if (Validator.isNotNumber(tryCount)) {
      throw new Error("[ERROR] 시도 횟수는 숫자로만 입력 가능합니다.");
    }
  }

  static #validateValidNumber(tryCount) {
    if (tryCount <= 0 || Validator.isInvalidNumber(tryCount)) {
      throw new Error("[ERROR] 시도 횟수가 유효하지 않습니다. 시도 횟수는 1이상의 자연수로 입력할 수 있습니다.");
    }
  }
}

export default TryCountValidator;
