import { useRouter } from 'next/router';
import React from 'react';
import axios from 'axios';
import { END } from 'redux-saga';
import { LOAD_POST_REQUEST } from '../../reducers/post';
import { LOAD_MY_INFO_REQUEST } from '../../reducers/user';
import wrapper from '../../store/configureStore';

function Post() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>{id}번 게시글</div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  // 쿠키가 공유되는 보안 문제를 막기 위해 굉장히 중요함
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  console.log(context.req.headers);

  context.store.dispatch({
    type: LOAD_POST_REQUEST,
    // const { id } = router.query; 에서 id에 접근할 수 있음
    data: context.params.id,
  });
  context.store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });
  context.store.dispatch(END);
  console.log('getServerSideProps end');
  await context.store.sagaTask.toPromise();
});
  // 화면을 그리기 전에 실행됨

export default Post;
