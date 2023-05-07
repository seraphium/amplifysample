import { takeEvery, put } from "redux-saga/effects";
import { CREATE_CHAT, GET_CHAT_RESPONSE_SUCCESS } from "../actions/actionTypes";
import { beginApiCall, apiCallError } from "../actions/apiStatusActions";

function* getResponse(data) {
  console.warn("requesting api", data.prompt);
  try {
    yield put(beginApiCall());
    const targetUrl =
      "https://st0yh47lx1.execute-api.us-east-2.amazonaws.com/UAT/testapi";

    let response = yield fetch(targetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        prompt: data.prompt,
      }),
    });
    const responseJson = yield response.json();

    console.warn("got response ", responseJson);
    yield put({ type: GET_CHAT_RESPONSE_SUCCESS, response: responseJson });
  } catch (error) {
    yield put(apiCallError(error));
    throw error;
  }
}

function* chatSaga(data) {
  yield takeEvery(CREATE_CHAT, getResponse);
}

export default chatSaga;
