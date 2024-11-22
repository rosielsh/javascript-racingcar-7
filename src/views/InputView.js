import { Console } from "@woowacourse/mission-utils";

class InputView {
  static async readCarNames() {
    return await this.#read("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
  }

  static async readTryCount() {
    return await this.#read("시도할 횟수는 몇 회인가요?\n");
  }

  static async #read(prompt) {
    return await Console.readLineAsync(prompt);
  }
}

export default InputView;
