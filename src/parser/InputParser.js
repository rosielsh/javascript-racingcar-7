class InputParser {
  static parseCarNames(carNames) {
    const namesArr = carNames.split(",");

    if (namesArr.length <= 1) {
      throw new Error("[ERROR]");
    }

    return namesArr;
  }
}

export default InputParser;
