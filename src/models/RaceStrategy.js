import { Random } from "@woowacourse/mission-utils";

class RaceStrategy {
  static canMove() {
    return Random.pickNumberInRange(0, 9) >= 4;
  }
}

export default RaceStrategy;
