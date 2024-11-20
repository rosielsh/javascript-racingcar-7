import { MissionUtils } from "@woowacourse/mission-utils";
import Car from "../../src/models/Car";
import Cars from "../../src/models/Cars";

jest.mock("../../src/models/Car.js", () => jest.fn());

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe("Cars 클래스 테스트", () => {
  test("자동차는 입력받은 이름 갯수만큼 생성된다.", () => {
    // given
    const names = ["자동차1", "자동차2", "자동차3"];

    // when
    new Cars(names);

    // then
    expect(Car).toHaveBeenCalledTimes(3);
  });

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
});
