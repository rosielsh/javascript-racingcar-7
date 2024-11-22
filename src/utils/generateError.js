import { ERROR_PREFIX } from "../constants/Message";

export const generateError = (message) => {
  throw new Error(`${ERROR_PREFIX} ${message}`);
};
