class CarNameValidator {
  static validate(carNames) {
    this.#validateIsArray(carNames);
    this.#validateType(carNames);
    this.#validateLength(carNames);
    this.#validateDuplicate(carNames);
  }

  static #validateIsArray(carNames) {
    if (!Array.isArray(carNames)) {
      throw new Error("[ERROR] 자동차 이름이 유효하지 않습니다.");
    }
  }

  static #validateType(carNames) {
    if (!carNames.every((name) => typeof name === "string")) {
      throw new Error("[ERROR] 자동차 이름은 문자여야 합니다.");
    }
  }

  static #validateLength(carNames) {
    if (carNames.some((name) => name.length > 5)) {
      throw new Error("[ERROR] 자동차 이름은 5자 이하여야 합니다.");
    }
  }

  static #validateDuplicate(carNames) {
    if (new Set(carNames).size !== carNames.length) {
      throw new Error("[ERROR] 중복된 자동차 이름이 존재합니다.");
    }
  }
}

export default CarNameValidator;
