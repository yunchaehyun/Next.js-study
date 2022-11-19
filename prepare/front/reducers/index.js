import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import user from './user';
import post from './post';

// (이전상태, 액션) 로 다음상태를 만들어주는게 reducer
const rootReducer = combineReducers({
  // hydrate를 위해서 index 리듀서를 하나 추가해주는거임
  // SSR을 위한거임
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log('HYDRATE', action);
        return {
          ...state,
          ...action.payload,
        };

      // 초기화
      default:
        return state;
    }
  },
  // user안에 user initialstate가 들어있음
  user,
  // post안에 post initialstate가 들어있음
  post,
});

export default rootReducer;
