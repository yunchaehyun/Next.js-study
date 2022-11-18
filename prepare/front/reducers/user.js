export const initialState = {
  isLoggingIn: false, // 로그인 시도중
  isLoggedIn: false, // 로그인 상태
  isLoggingOut: false, // 로그아웃 시도중
  me: null,
  signUpData: {},
  loginData: {},
};

// action creater > 동적으로 액션 만들어줌
// export 해줌
export const loginRequestAction = (data) => {
  return {
    // type은 reducer로 전달되는 key같은 개념 함수에 대한 설명
    type: "LOG_IN_REQUEST",
    data,
  };
};
// export 해줌
export const logoutRequestAction = () => {
  return {
    type: "LOG_OUT_REQUEST",
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN_REQUEST":
      return {
        // // 참조 관계 때문에 객체 생성
        // ...state,
        // // 바꾸고자 하는게 객체 안에 있으면 객체 바깥은 ...state로 정리
        // // 그리고 객체 안에서도 바꾸고자 하는 내용만 정의해주고, 나머지는 ...state
        // user: {
        ...state,
        isLoggingIn: true,
        me: action.data,
        // },
      };
    case "LOG_IN_SUCCESS":
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        me: { ...action.data, nickname: "chaehyun" },
        // },
      };
    case "LOG_IN_FAILURE":
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: false,
        // },
      };
    case "LOG_OUT_REQUEST":
      return {
        ...state.user,
        isLoggingOut: true,
      };
    case "LOG_OUT_SUCCESS":
      return {
        ...state.user,
        isLoggedIn: false,
        isLoggingOut: false,
        me: null,
      };
    case "LOG_OUT_FAILURE":
      return {
        ...state.user,
        isLoggingOut: false,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default reducer;
