import MESSAGE from "../constants/Message.js";
import { generateError } from "../utils/generateError.js";
import Validator from "./Validator.js";

class TryCountValidator {
  static validate(tryCount) {
    this.#validateType(tryCount);
    this.#validateValidNumber(tryCount);
  }

  static #validateType(tryCount) {
    if (Validator.isNotNumber(tryCount)) {
      generateError(MESSAGE.ERROR.TRY_COUNT.INVALID_TYPE);
    }
  }

  static #validateValidNumber(tryCount) {
    if (tryCount <= 0 || Validator.isInvalidNumber(tryCount)) {
      generateError(MESSAGE.ERROR.TRY_COUNT.INVALID_NUMBER);
    }
  }
}

export default TryCountValidator;
