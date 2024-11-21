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
      throw new Error("[ERROR]");
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
      throw new Error("[ERROR]");
    }
  }
}

export default Car;
