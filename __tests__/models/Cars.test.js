import Car from "../../src/models/Car";
import Cars from "../../src/models/Cars";

jest.mock("../../src/models/Car.js", () => jest.fn());

describe("Cars 클래스 테스트", () => {
  test("자동차는 입력받은 이름 갯수만큼 생성된다.", () => {
    // given
    const names = ["자동차1", "자동차2", "자동차3"];

    // when
    new Cars(names);

    // then
    expect(Car).toHaveBeenCalledTimes(3);
  });
});
