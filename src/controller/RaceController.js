import Cars from "../models/Cars.js";
import RaceStrategy from "../models/RaceStrategy.js";
import Winner from "../models/Winner.js";
import InputParser from "../parser/InputParser.js";
import Converter from "../utils/Converter.js";
import CarNameValidator from "../validators/CarNameValidator.js";
import TryCountValidator from "../validators/TryCountValidator.js";
import InputView from "../views/InputView.js";
import OutputView from "../views/OutputView.js";

class RaceController {
  async race() {
    const carNames = await this.#getCarNames();
    const tryCount = await this.#getTryCount();

    const cars = this.#race(carNames, tryCount);
    this.#calculateWinner(cars);
  }

  async #getCarNames() {
    const carNames = await InputView.readCarNames();
    const parsedCarNames = InputParser.parseCarNames(carNames);
    CarNameValidator.validate(parsedCarNames);

    return parsedCarNames;
  }

  async #getTryCount() {
    const tryCount = await InputView.readTryCount();
    const convertedTryCount = Converter.convertTryCountStringToNumber(tryCount);
    TryCountValidator.validate(convertedTryCount);
    return convertedTryCount;
  }

  #race(carNames, tryCount) {
    const cars = new Cars(carNames, RaceStrategy);
    OutputView.printResultText();
    Array.from({ length: tryCount }).forEach(() => {
      const currentRaceInfo = cars.race();
      OutputView.printRaceResult(currentRaceInfo);
    });

    return cars;
  }

  async #calculateWinner(cars) {
    const winner = Winner.from(cars.getCars());
    OutputView.printWinners(winner.getWinners());
  }
}

export default RaceController;
