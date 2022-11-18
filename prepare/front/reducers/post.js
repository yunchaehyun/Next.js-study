export const initialState = {
  mainPosts: [
    {
      //post1의 id
      id: 1,
      //post1의 user
      User: {
        id: 1,
        nickname: "채현이",
      },
      //post1의 content
      content: "첫 번째 게시글 #해시태그 #익스프레스",
      Images: [
        {
          src: "https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726",
        },
        {
          src: "https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg",
        },
        {
          src: "https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg",
        },
      ],
      // post1의 comment
      Comment: [
        {
          User: {
            nickname: "태희",
          },
          content: "사보 그래도 선방했다.",
        },
        {
          User: {
            nickname: "진아",
          },
          content: "감기 조심해~",
        },
      ],
    },
  ],
  // mainPost array 끝
  // imagePath: 이미지 업로드할 때 이미지 경로들 저장하는 변수
  imagePaths: [],
  // postAdded: 게시글 추가 완료 여부
  postAdded: false,
};

// 액션 이름을 상수로 빼줌.
export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const addPostRequestAction = (data) => ({
  type: ADD_POST_REQUEST,
  data,
});

const dummyPost = {
  id: 2,
  content: "더미데이터입니다.",
  User: {
    id: 1,
    nickname: "민정",
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return {};
    case ADD_POST_SUCCESS:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
      };
    case ADD_POST_FAILURE:
      return {};
    default:
      return state;
  }
};

export default reducer;
