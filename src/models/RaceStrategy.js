import { Random } from "@woowacourse/mission-utils";
import SETTING from "../constants/Setting.js";

class RaceStrategy {
  static canMove() {
    return (
      Random.pickNumberInRange(SETTING.MOVE.MIN_RANGE, SETTING.MOVE.MAX_RANGE) >= SETTING.MOVE.POSSIBLE_CONDITION_NUMBER
    );
  }
}

export default RaceStrategy;
