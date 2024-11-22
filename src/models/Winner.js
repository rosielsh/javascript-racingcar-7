class Winner {
  #winners;

  constructor(winners) {
    this.#winners = winners;
  }

  static from(carsInfo) {
    const positions = carsInfo.map((car) => car.getPosition());
    const maxPosition = Math.max(...positions);
    const winners = carsInfo.filter((car) => car.getPosition() === maxPosition).map((car) => car.getName());

    return new Winner(winners);
  }

  getWinners() {
    return this.#winners;
  }
}

export default Winner;
