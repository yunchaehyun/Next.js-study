import {
  all,
  fork,
  call,
  put,
  takeEvery,
  take,
  takeLatest,
  throttle,
} from "redux-saga/effects";
import axios from "axios";

function loginAPI(data) {
  return axios.post("/api/login", data);
}

function* logIn(action) {
  try {
    // axios를 통해 받은 결과
    // loginAPI(action.data) 라고 생각하면 됨
    const result = yield call(loginAPI, action.data);
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

function addPostAPI(data) {
  //data: 게시할 post에 대한 data
  return axios.post("/api/post", data);
}

function* addPost(action) {
  try {
    yield put({
      type: "ADD_POST_REQUEST",
    });
    // axios를 통해 받은 결과
    const result = yield call(addPostAPI, action.data);
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
  yield takeLatest("LOG_IN_REQUEST", logIn);
}

function* watchLogOut() {
  yield takeLatest("ADD_POST_REQUEST", logOut);
}

function* watchAddPost() {
  yield takeLatest("ADD_POST_REQUEST", addPost);
}

export default function* rootSaga() {
  yield all([fork(watchLogin), fork(watchLogOut), fork(watchAddPost)]);
}
