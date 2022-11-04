// ../store/configureStore.js
import { createWrapper } from "next-redux-wrapper";
import { createStore } from "redux";

const configureStore = () => {
    const store = createStore(reducer);
    return store;
};

const wrapper = createWrapper(
  configureStore,
  // 옵션 객체
  { debug: process.env.NODE_ENV === "development" }
);

export default wrapper;
