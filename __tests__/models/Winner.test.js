import { MissionUtils } from "@woowacourse/mission-utils";
import Cars from "../../src/models/Cars";
import RaceStrategy from "../../src/models/RaceStrategy";

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe("Winner 클래스 테스트", () => {
  test("가장 멀리 이동한 사람이 우승한다", () => {
    // given
    const carNames = ["자동차1", "자동차2", "자동차3"];
    const cars = new Cars(carNames, RaceStrategy);
    const tryCount = 2;
    const randomNum = [6, 0, 0, 3, 0, 0];
    const winnerName = carNames[0];

    // when
    mockRandoms(randomNum);

    Array.from({ length: tryCount }).forEach(() => {
      cars.race();
    });

    const winners = Winner.from(cars.getCars());

    // then
    expect(winners[0]).toEqual(winnerName);
  });
});
