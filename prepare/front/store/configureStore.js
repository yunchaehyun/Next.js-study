// ../store/configureStore.js
import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, compose, createStore } from "redux";
import reducer from "../reducers/index.js";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from 'redux-thunk';

// 액션이 디스패치 되는걸 logging하는 middleware function
const loggerMiddleware = ({dispatch,getState}) => (next) => (action) => {
  console.log(action);
  return next(action);
};

// store : state와 reducer를 포함한 개념이라고 보면 됨
const configureStore = () => {
  // middleware 배열안에 saga나 thunk 같은걸 넣음
  const middlewares = [thunkMiddleware, loggerMiddleware];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? // 배포용
        compose(applyMiddleware(...middlewares))
      : // 개발용 devtool 연결
        composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(reducer, enhancer);
  return store;
};

const wrapper = createWrapper(
  configureStore,
  // 옵션 객체
  { debug: process.env.NODE_ENV === "development" }
);

export default wrapper;
