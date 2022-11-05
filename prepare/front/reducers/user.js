export const initialState = {
  isLoggedIn: false,
  user: null,
  signUpData: {},
  loginData: {},
};

// action creater > 동적으로 액션 만들어줌
// export 해줌
export const loginAction = (data) => {
  return {
    // type은 reducer로 전달되는 key같은 개념 함수에 대한 설명
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        // // 참조 관계 때문에 객체 생성
        // ...state,
        // // 바꾸고자 하는게 객체 안에 있으면 객체 바깥은 ...state로 정리
        // // 그리고 객체 안에서도 바꾸고자 하는 내용만 정의해주고, 나머지는 ...state
        // user: {
          ...state,
          isLoggedIn: true,
          user: action.data,
        // },
      };
    case "LOG_OUT":
      return {
          ...state.user,
          isLoggedIn: false,
          user: null,
      };
    default:
      return state;
  }
};

export default reducer;
