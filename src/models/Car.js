class Car {
  #name;
  #position;

  constructor(name) {
    this.#validate(name);
    this.#name = name;
    this.#position = 0;
  }

  #validate(name) {
    if (name.length <= 0 || name.length >= 5) {
      throw new Error("[ERROR]");
    }
  }
}

export default Car;
