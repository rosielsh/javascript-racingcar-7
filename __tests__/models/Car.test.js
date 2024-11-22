import Car from "../../src/models/Car";

describe("Car 클래스 테스트", () => {
  test("자동차의 이름은 5자 이내여야 한다.", () => {
    // given
    const name = "자동차차차차";

    // when & then
    expect(() => new Car(name)).toThrow("[ERROR]");
  });

  test("자동차는 전진할 수 있다.", () => {
    // given
    const name = "자동차";
    const car = new Car(name);
    const MOVE_POS = 1;

    // when
    car.move(MOVE_POS);

    // then
    expect(car.getPosition()).toBe(MOVE_POS);
  });

  test("자동차는 음의 위치로 이동할 수 없다.", () => {
    // given
    const name = "자동차";
    const car = new Car(name);
    const MOVE_POS = -10000;

    // when & then
    expect(() => car.move(MOVE_POS)).toThrow("[ERROR]");
  });
});
