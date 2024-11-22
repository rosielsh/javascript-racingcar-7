import MESSAGE from "../constants/Message.js";
import { generateError } from "../utils/generateError.js";

class InputParser {
  static parseCarNames(carNames) {
    const namesArr = carNames.split(",");

    if (namesArr.length <= 1) {
      generateError(MESSAGE.ERROR.CAR.INVALID_CAR_COUNT);
    }

    return namesArr;
  }
}

export default InputParser;
