import CarNameValidator from "../../src/validators/CarNameValidator";

describe("CarValidator 클래스 테스트", () => {
  test("자동차 이름은 5자 이하여야 한다.", () => {
    // given
    const carNames = ["자동차차차차", "자동차"];

    // when & then
    expect(() => CarNameValidator.validate(carNames)).toThrow("[ERROR]");
  });

  test("자동차 이름은 중복될 수 없다", () => {
    // given
    const carNames = ["자동차", "자동차"];

    // when & then
    expect(() => CarNameValidator.validate(carNames)).toThrow("[ERROR]");
  });

  test("자동차 이름은 문자여야 한다.", () => {
    // given
    const carNames = ["자동차@", "자동차ab"];

    // when & then
    expect(() => CarNameValidator.validate(carNames)).toThrow("[ERROR]");
  });
});
