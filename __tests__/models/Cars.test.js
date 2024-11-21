import { MissionUtils } from "@woowacourse/mission-utils";
import Cars from "../../src/models/Cars";

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe("Cars 클래스 테스트", () => {
  test("자동차들이 모두 4의 랜덤수를 가지면 모두 전진한다.", () => {
    // given
    const names = ["자동차1", "자동차2", "자동차3"];
    const cars = new Cars(names);
    const expectedPos = [1, 1, 1];

    // when
    mockRandoms([4, 4, 4]);
    const pos = cars.race();

    // then
    pos.forEach((p, idx) => {
      expect(p).toEqual(expectedPos[idx]);
    });
  });

  test("자동차들이 모두 4 미만의 수를 가지면 모두 전진하지 않는다.", () => {
    // given
    const names = ["자동차1", "자동차2", "자동차3"];
    const cars = new Cars(names);
    const expectedPos = [0, 0, 0];

    // when
    mockRandoms([2, 1, 3]);
    const pos = cars.race();

    // then
    pos.forEach((p, idx) => {
      expect(p).toEqual(expectedPos[idx]);
    });
  });

  test("자동차 이름은 중복될 수 없다.", () => {
    // given
    const names = ["자동차1", "자동차1", "자동차2"];

    // when & then
    expect(() => new Cars(names)).toThrow("[ERROR]");
  });
});
