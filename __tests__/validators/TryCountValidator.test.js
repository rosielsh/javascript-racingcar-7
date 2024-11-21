describe("TryCountValidator 클래스 테스트", () => {
  test("시도할 횟수는 숫자여야 한다.", () => {
    // given
    const tryCount = 3;

    expect(() => TryCountValidator.validate(tryCount)).not.toThrow();
  });

  test("시도할 횟수가 숫자가 아니면 에러를 발생한다.", () => {
    // given
    const tryCount = ["", undefined, NaN, null, {}, []];

    // when & then
    tryCount.forEach((test) => {
      expect(() => TryCountValidator.validate(test)).toThrow("[ERROR]");
    });
  });

  test("시도할 횟수는 0이나 음의 정수이면 안된다.", () => {
    // given
    const tryCount = [0, -5, Number.MIN_VALUE, -Infinity];

    // when & then
    tryCount.forEach((test) => {
      expect(() => TryCountValidator.validate(test)).toThrow("[ERROR]");
    });
  });
});
