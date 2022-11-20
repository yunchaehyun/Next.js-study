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
} from 'redux-saga/effects';
import axios from 'axios';
import shortId from 'shortid';
import {
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,
} from '../reducers/post';
import { ADD_POST_TO_ME } from '../reducers/user';

function addPostAPI(data) {
  // data: 게시할 post에 대한 data
  return axios.post('/api/post', data);
}

function* addPost(action) {
  try {
    yield delay(1000);
    const id = shortId.generate();
    // axios를 통해 받은 결과
    // const result = yield call(addPostAPI, action.data);
    yield put({
      type: ADD_POST_SUCCESS,
      // 성공 결과는 result.data에 담겨 있음
      data: {
        id,
        content: action.data,
      },
    });
    yield put({
      type: ADD_POST_TO_ME,
      data: id,
    });
  } catch (err) {
    yield put({
      type: ADD_POST_FAILURE,
      // 실패 결과는 err.response.data에 담겨 있음
      error: err.response.data,
    });
  }
}

function addCommentAPI(data) {
  // data: 게시할 post에 대한 data
  return axios.post(`/api/post/${data.postId}/comment`, data);
}

function* addComment(action) {
  try {
    // const result = yield call(addCommentAPI, action.data);
    yield delay(1000);
    // 게시글의 id
    const id = shortId.generate();
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: ADD_COMMENT_FAILURE,
      data: err.response.data,
    });
  }
}
function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}
export default function* postSaga() {
  yield all([fork(watchAddPost), fork(watchAddComment)]);
}
