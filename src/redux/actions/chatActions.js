import * as types from "./actionTypes";

export function createChat(prompt) {
  return { type: types.CREATE_CHAT, prompt };
}
