import shortId from 'shortid';

export const initialState = {
  mainPosts: [
    {
      // post1의 id
      id: shortId.generate(),
      // post1의 user
      User: {
        id: 1,
        nickname: '채현이',
      },
      // post1의 content
      content: '첫 번째 게시글 #해시태그 #익스프레스',
      Images: [
        {
          id: shortId.generate(),
          src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
        },
        {
          id: shortId.generate(),
          src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
        },
        {
          id: shortId.generate(),
          src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
        },
      ],
      // post1의 comment
      Comments: [
        {
          id: shortId.generate(),
          User: {
            id: shortId.generate(),
            nickname: '태희',
          },
          content: '사보 그래도 선방했다.',
        },
        {
          id: shortId.generate(),
          User: {
            id: shortId.generate(),
            nickname: '진아',
          },
          content: '감기 조심해~',
        },
      ],
    },
  ],
  // mainPost array 끝
  // imagePath: 이미지 업로드할 때 이미지 경로들 저장하는 변수
  imagePaths: [],
  // postAdded: 게시글 추가 완료 여부
  postAdded: false,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
};

// 액션 이름을 상수로 빼줌.
export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const addPostRequestAction = (data) => ({
  type: ADD_POST_REQUEST,
  data,
});

export const addCommentRequestAction = (data) => ({
  type: ADD_COMMENT_REQUEST,
  data,
});

const dummyPost = (data) => ({
  // 게시글의 id
  id: data.id,
  // 게시글의 content
  content: data.content,
  User: {
    id: 1,
    nickname: '민정',
  },
  Images: [],
  Comments: [],
});

const dummyComment = (data) => ({
  id: shortId.generate(),
  content: data,
  User: {
    id: 1,
    nickname: '채채',
  },
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return {
        ...state,
        addPostLoading: true,
        addPostDone: false,
        addPostError: null,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        mainPosts: [dummyPost(action.data), ...state.mainPosts],
        addPostLoading: false,
        addPostDone: true,
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        addPostLoading: false,
        addPostError: action.error,
      };
    case ADD_COMMENT_REQUEST:
      return {
        ...state,
        addCommentLoading: true,
        addCommentDone: false,
        addCommentError: null,
      };
    case ADD_COMMENT_SUCCESS: {
      // 넘겨준 postid를 통해 postIndex를 찾음.
      const postIndex = state.mainPosts.findIndex(
        (v) => v.id === action.data.postId,
      );
      // postIndex로 새로운 post 객체 생성함. mainPost에서 postIndex객체가 들어있음.
      const post = { ...state.mainPosts[postIndex] };
      // 새로운 post객체의 comment를 수정해줌. (불변성 지키기!!!!) 원래 comments를 전개 구문으로 펼쳐줌
      post.Comments = [dummyComment(action.data.content), ...post.Comments];
      // mainPosts 객체를 하나 복사해줌 (불변성)
      const mainPosts = [...state.mainPosts];
      // mainPosts의 postIndex 위치에 comment를 추가한 postIndex의 post객체를 변경해줌.
      mainPosts[postIndex] = post;
      return {
        ...state,
        mainPosts,
        addCommentLoading: false,
        addCommentDone: true,
      };
    }
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        addCommentLoading: false,
        addCommentError: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
