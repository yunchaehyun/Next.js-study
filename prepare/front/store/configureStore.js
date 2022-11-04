// ../store/configureStore.js
import { createWrapper } from "next-redux-wrapper";
import { createStore } from "redux";
import reducer from '../reducers/index.js';

// store : state와 reducer를 포함한 개념이라고 보면 됨
const configureStore = () => {
    const store = createStore(reducer);
    store.dispatch({
      type: 'CHANGE_NICKNAME',
      data: 'chaehyun',
    })
    return store;
};

const wrapper = createWrapper(
  configureStore,
  // 옵션 객체
  { debug: process.env.NODE_ENV === "development" }
);

export default wrapper;
