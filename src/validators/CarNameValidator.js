class CarNameValidator {
  static validate(carNames) {
    this.#validateLength(carNames);
    this.#validateType(carNames);
    this.#validateDuplicate(carNames);
  }

  static #validateLength(carNames) {
    if (carNames.some((name) => name.length > 5)) {
      throw new Error("[ERROR] 자동차 이름은 5자 이하여야 합니다.");
    }
  }

  static #validateType(carNames) {
    if (carNames.some((name) => !/^[가-힣]+$/.test(name))) {
      throw new Error("[ERROR] 자동차 이름은 문자여야 합니다.");
    }
  }

  static #validateDuplicate(carNames) {
    if (new Set(carNames).size !== carNames.length) {
      throw new Error("[ERROR] 중복된 자동차 이름이 존재합니다.");
    }
  }
}

export default CarNameValidator;
