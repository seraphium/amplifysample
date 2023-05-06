import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function chats(state = initialState.chats, action) {
  switch (action.type) {
    case types.GET_CHAT_RESPONSE_SUCCESS:
      return action.response;
    default:
      return state;
  }
}
