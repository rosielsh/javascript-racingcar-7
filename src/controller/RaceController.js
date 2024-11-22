import Cars from "../models/Cars.js";
import RaceStrategy from "../models/RaceStrategy.js";
import Winner from "../models/Winner.js";
import InputParser from "../parser/InputParser.js";
import Converter from "../utils/Converter.js";
import CarNameValidator from "../validators/CarNameValidator.js";
import TryCountValidator from "../validators/TryCountValidator.js";
import OutputView from "../views/OutputView.js";

class RaceController {
  #inputView;
  #outputView;

  constructor({ inputView, outputView }) {
    this.#inputView = inputView;
    this.#outputView = outputView;
  }

  async race() {
    const carNames = await this.#getCarNames();
    const tryCount = await this.#getTryCount();

    const cars = this.#race(carNames, tryCount);
    this.#calculateWinner(cars);
  }

  async #getCarNames() {
    const carNames = await this.#inputView.readCarNames();
    const parsedCarNames = InputParser.parseCarNames(carNames);
    CarNameValidator.validate(parsedCarNames);

    return parsedCarNames;
  }

  async #getTryCount() {
    const tryCount = await this.#inputView.readTryCount();
    const convertedTryCount = Converter.convertTryCountStringToNumber(tryCount);
    TryCountValidator.validate(convertedTryCount);
    return convertedTryCount;
  }

  #race(carNames, tryCount) {
    const cars = new Cars(carNames, RaceStrategy);
    OutputView.printResultText();
    Array.from({ length: tryCount }).forEach(() => {
      const currentRaceInfo = cars.race();
      this.#outputView.printRaceResult(currentRaceInfo);
    });

    return cars;
  }

  async #calculateWinner(cars) {
    const winner = Winner.from(cars.getCars());
    this.#outputView.printWinners(winner.getWinners());
  }
}

export default RaceController;
