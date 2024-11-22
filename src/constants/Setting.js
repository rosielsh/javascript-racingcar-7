import { deepFreeze } from "./deepFreeze.js";

const SETTING = deepFreeze({
  CAR: {
    MIN_NAME_LENGTH: 1,
    MAX_NAME_LENGTH: 5,
    INITIAL_POSITION: 0,
  },
  MOVE: {
    MIN_RANGE: 0,
    MAX_RANGE: 9,
    POSSIBLE_CONDITION_NUMBER: 4,
    UNIT: 1,
  },
});

export default SETTING;
