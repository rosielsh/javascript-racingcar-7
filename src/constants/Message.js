import { deepFreeze } from "./deepFreeze.js";

export const ERROR_PREFIX = "[ERROR]";

const MESSAGE = deepFreeze({
  ERROR: {
    CAR: {
      INVALID_MOVE: "자동차는 음의 방향으로 이동할 수 없습니다.",
      INVALID_LENGTH: "자동차 이름은 5자 이하로 입력 가능합니다.",
      DUPLICATE_CAR: "중복된 자동차를 입력할 수 없습니다.",
      INVALID_CAR_COUNT: "자동차를 2대 이상 등록해야 합니다.",
    },
    CAR_NAME: {
      NOT_ARRAY: "자동차 이름이 유효하지 않습니다.",
      INVALID_TYPE: "자동차 이름은 문자여야 합니다.",
      INVALID_LENGTH: "자동차 이름은 5자 이하여야 합니다.",
    },
    TRY_COUNT: {
      INVALID_TYPE: "시도 횟수는 숫자로만 입력 가능합니다.",
      INVALID_NUMBER: "시도 횟수가 유효하지 않습니다. 시도 횟수는 1이상의 자연수로 입력할 수 있습니다.",
    },
  },
  PROMPT: {
    CAR_NAMES: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
    TRY_COUNT: "시도할 횟수는 몇 회인가요?\n",
  },
});

export default MESSAGE;
