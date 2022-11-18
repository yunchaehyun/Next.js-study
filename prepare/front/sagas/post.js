import {
  all,
  fork,
  call,
  put,
  takeEvery,
  take,
  takeLatest,
  throttle,
  delay,
} from "redux-saga/effects";
import axios from "axios";

function addPostAPI(data) {
  //data: 게시할 post에 대한 data
  return axios.post("/api/post", data);
}

function* addPost(action) {
  try {
    yield delay(1000);

    yield put({
      type: "ADD_POST_REQUEST",
    });
    // axios를 통해 받은 결과
    // const result = yield call(addPostAPI, action.data);
    yield put({
      type: "ADD_POST_SUCCESS",
      // 성공 결과는 result.data에 담겨 있음
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: "ADD_POST_FAILURE",
      // 실패 결과는 err.response.data에 담겨 있음
      data: err.response.data,
    });
  }
}
function* watchAddPost() {
  yield takeLatest("ADD_POST_REQUEST", addPost);
}

export default function* postSaga() {
  yield all([fork[watchAddPost]]);
}
