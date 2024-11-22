import InputParser from "../../src/parser/InputParser";

describe("InputParser 클래스 테스트", () => {
  test("자동차는 쉼표로 구분하며 1대 이상 등록해야 한다.", () => {
    // given
    const inputs = ["자동차1", "자동차1.자동차2", "자동차 3"];

    // when & then
    inputs.forEach((input) => {
      expect(() => InputParser.parseCarNames(input)).toThrow("[ERROR]");
    });
  });
});
