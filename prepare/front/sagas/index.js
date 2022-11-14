import { all, fork, call, put, take } from "redux-saga/effects";
import axios from "axios";

function loginAPI() {
  return axios.post("/api/login");
}

function* logIn() {
  try {
    yield put({
      type: "LOG_IN_REQUEST",
    });
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

function logOutAPI() {
  return axios.post("/api/logout");
}

function* logOut() {
  try {
    yield put({
      type: "ADD_POST_REQUEST",
    });
    // axios를 통해 받은 결과
    const result = yield call(logOutAPI);
    yield put({
      type: "ADD_POST_SUCCESS",
      // 성공 결과는 result.data에 담겨 있음
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: "ADD_POST_FAILURE",
      // 실패 결과는 err.response.data에 담겨 있음
      data: err.response.data,
    });
  }
}

function addPostAPI() {
  return axios.post("/api/post");
}

function* addPost() {
  try {
    yield put({
      type: "ADD_POST_REQUEST",
    });
    // axios를 통해 받은 결과
    const result = yield call(addPostAPI);
    yield put({
      type: "ADD_POST_SUCCESS",
      // 성공 결과는 result.data에 담겨 있음
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: "ADD_POST_FAILURE",
      // 실패 결과는 err.response.data에 담겨 있음
      data: err.response.data,
    });
  }
}
function* watchLogin() {
  // 로그인 액션이 들어오면, login 함수를 실행
  // 들어올 때 까지 기다림. 이벤트리스너 같은 역할을 수행
  yield take("LOG_IN_REQUEST", logIn);
}

function* watchLogOut() {
  yield take("ADD_POST_REQUEST", logOut);
}

function* watchAddPost() {
  yield take("ADD_POST_REQUEST", addPost);
}

export default function* rootSaga() {
  yield all([fork(watchLogin), fork(watchLogOut), fork(watchAddPost)]);
}
