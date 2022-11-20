// ../store/configureStore.js
import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import reducer from '../reducers/index';
import rootSaga from '../sagas';

// store : state와 reducer를 포함한 개념이라고 보면 됨
const configureStore = () => {
  // saga middleware 생성
  const sagaMiddleware = createSagaMiddleware();
  // middleware 배열안에 saga나 thunk 같은걸 넣음
  const middlewares = [sagaMiddleware];
  const enhancer = process.env.NODE_ENV === 'production'
    ? // 배포용
    compose(applyMiddleware(...middlewares))
    : // 개발용 devtool 연결
    composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(reducer, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = createWrapper(
  configureStore,
  // 옵션 객체
  { debug: process.env.NODE_ENV === 'development' },
);

export default wrapper;
