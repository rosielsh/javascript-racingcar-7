import { Console } from "@woowacourse/mission-utils";

class InputView {
  static readCarNames() {
    return this.read("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
  }

  static readTryCount() {
    return this.read("시도할 횟수는 몇 회인가요?\n");
  }

  read(prompt) {
    return Console.readLineAsync(prompt);
  }
}

export default InputView;
