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
import postSaga from "./post";
import userSaga from "./user";
import axios from "axios";

export default function* rootSaga() {
  yield all([fork(postSaga), fork(userSaga)]);
}
