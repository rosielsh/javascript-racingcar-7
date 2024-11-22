class InputParser {
  static parseCarNames(carNames) {
    const namesArr = carNames.split(",");

    if (namesArr.length <= 1) {
      throw new Error("[ERROR] 자동차를 2대 이상 등록해야 합니다.");
    }

    return namesArr;
  }
}

export default InputParser;
