import { HYDRATE } from "next-redux-wrapper";

// 하나의 state
const initialState = {
  // name: "chae",
  // age: 24,
  // password: "공부하자",
  // user 객체
  user: {
    isLoggedIn: false,
    user: null,
    signUpData: {},
    loginData: {},
  },
  // post 객체
  post: {
    mainPost: [],
  },
};

// export 해줌
export const loginAction = (data) => {
  return {
    type: "LOG_IN",
    data,
  };
};

// export 해줌
export const logoutAction = () => {
  return {
    type: "LOG_OUT",
  };
};

// action creater > 동적으로 액션 만들어줌
const changeNickname = (data) => {
  return {
    // type은 reducer로 전달되는 key같은 개념 함수에 대한 설명
    type: "CHANGE_NICKNAME",
    data,
  };
};
// 하나의 액션
changeNickname("chae");

////////////////////////////////////////////

// (이전상태, 액션) 로 다음상태를 만들어주는게 reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // nickname을 바꾸려고 할 경우
    case "CHANGE_NICKNAME":
      return {
        // 참조 관계 때문에 객체 생성
        ...state,
        name: action.data,
      };
    case "LOG_IN":
      return {
        // 참조 관계 때문에 객체 생성
        ...state,
        // 바꾸고자 하는게 객체 안에 있으면 객체 바깥은 ...state로 정리
        // 그리고 객체 안에서도 바꾸고자 하는 내용만 정의해주고, 나머지는 ...state
        user: {
          ...state.user,
          isLoggedIn: true,
          user: action.data,
        },
      };
    case "LOG_OUT":
      return {
        // 참조 관계 때문에 객체 생성
        ...state,
        // 바꾸고자 하는게 객체 안에 있으면 객체 바깥은 ...state로 정리
        // 그리고 객체 안에서도 바꾸고자 하는 내용만 정의해주고, 나머지는 ...state
        user: {
          ...state.user,
          isLoggedIn: false,
          user: null,
        },
      };
  }
};

export default rootReducer;
