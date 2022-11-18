export const initialState = {
  logInLoading: false, // 로그인 시도중
  logInDone: false, // 로그인 상태
  logInError: null,
  logOutLoading: false, // 로그아웃 시도중
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  signUpDone: false,
  signUpFailure: null,
  me: null,
  signUpData: {},
  loginData: {},
};

// 자주 사용되는 변수들 상수화
export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SING_UP_SUCCESS = 'SING_UP_SUCCESS';
export const SING_UP_FAILURE = 'SING_UP_FAILURE';

export const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE';

export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';

const dummyUser = (data) => ({
  ...data,
  nickname: '채현',
  id: 1,
  Posts: [],
  Followings: [],
  Followers: [],
})

// action creater > 동적으로 액션 만들어줌
// export 해줌
export const loginRequestAction = (data) => {
  return {
    // type은 reducer로 전달되는 key같은 개념 함수에 대한 설명
    type: LOG_IN_REQUEST,
    data,
  };
};
// export 해줌
export const logoutRequestAction = () => {
  return {
    type: LOG_OUT_REQUEST,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return {
        // // 참조 관계 때문에 객체 생성
        // ...state,
        // // 바꾸고자 하는게 객체 안에 있으면 객체 바깥은 ...state로 정리
        // // 그리고 객체 안에서도 바꾸고자 하는 내용만 정의해주고, 나머지는 ...state
        // user: {
        ...state,
        logInLoading: true,
        logInError: null,
        logInDone: false,
      };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        logInLoading: false,
        logInDone: true,
        me: dummyUser(action.data),
        // },
      };
    case LOG_IN_FAILURE:
      return {
        ...state,
        logInLoading: false,
        logInError: action.error,
        // },
      };
    case LOG_OUT_REQUEST:
      return {
        ...state,
        logOutLoading: true,
        logOutDone: false,
        logOutError: null,
      };
    case LOG_OUT_SUCCESS:
      return {
        ...state,
        logOutLoading: false,
        logOutDone: true,
        me: null,
      };
    case LOG_OUT_FAILURE:
      return {
        ...state,
        logOutLoading: false,
        logOutError: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
