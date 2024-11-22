class Car {
  #name;
  #position;

  constructor(name) {
    this.#validate(name);
    this.#name = name;
    this.#position = 0;
  }

  move(position) {
    if (this.#position + position < 0) {
      throw new Error("[ERROR] 자동차는 음의 방향으로 이동할 수 없습니다.");
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
    if (name.length <= 0 || name.length >= 5) {
      throw new Error("[ERROR] 자동차 이름은 5자 이하로 입력 가능합니다.");
    }
  }
}

export default Car;
