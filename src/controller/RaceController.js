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
    const carNames = await InputView.readCarNames();
    const parsedCarNames = InputParser.parseCarNames(carNames);
    CarNameValidator.validate(parsedCarNames);

    const tryCount = await InputView.readTryCount();
    const convertedTryCount = Converter.convertTryCountStringToNumber(tryCount);
    TryCountValidator.validate(convertedTryCount);

    const cars = new Cars(parsedCarNames, RaceStrategy);
    OutputView.printResultText();
    Array.from({ length: convertedTryCount }).forEach(() => {
      const currentRaceInfo = cars.race();
      OutputView.printRaceResult(currentRaceInfo);
    });

    const winner = Winner.from(cars.getCars());
    OutputView.printWinners(winner.getWinners());
  }
}

export default RaceController;
