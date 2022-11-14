import { all, fork, call, put, take } from "redux-saga/effects";
import axios from "axios";

function loginAPI() {
  return axios.post("/api/login");
}

function* login() {
  try {
    // axios를 통해 받은 결과
    const result = yield call(loginAPI);
    yield put({
      type: "LOG_IN_SUCCESS",
      // 성공 결과는 result.data에 담겨 있음
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: "LOG_IN_FAILURE",
      // 실패 결과는 err.response.data에 담겨 있음
      data: err.response.data,
    });
  }
}

function* watchLogin() {
  // 로그인 액션이 들어오면, login 함수를 실행
  // 들어올 때 까지 기다림. 이벤트리스너 같은 역할을 수행
  yield take("LOG_IN", login);
}

function* watchLogOut() {
  yield take("LOG_OUT");
}

function* watchAddPost() {
  yield take("ADD_POST");
}

export default function* rootSaga() {
  yield all([fork(watchLogin), fork(watchLogOut), fork(watchAddPost)]);
}
