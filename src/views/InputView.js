import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "../constants/Message.js";

class InputView {
  static async readCarNames() {
    return await this.#read(MESSAGE.PROMPT.CAR_NAMES);
  }

  static async readTryCount() {
    return await this.#read(MESSAGE.PROMPT.TRY_COUNT);
  }

  static async #read(prompt) {
    return await Console.readLineAsync(prompt);
  }
}

export default InputView;
