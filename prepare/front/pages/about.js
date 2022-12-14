import React from 'react';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import { END } from 'redux-saga';
import { Avatar, Card } from 'antd';
import AppLayout from '../components/AppLayout';
import wrapper from '../store/configureStore';
import { LOAD_USER_REQUEST } from '../reducers/user';

export default function About() {
  const { userInfo } = useSelector((state) => state.user);

  return (
    <AppLayout>
      <Head>
        <title>chae | NodeBird</title>
      </Head>
      <Card
        actions={[
          <div key="twit">짹짹<br />{userInfo.Posts.length}</div>,
          <div key="followings">팔로잉<br />{userInfo.Followings.length}</div>,
          <div key="followers">팔로워<br />{userInfo.Followers.length}</div>,
        ]}
      >
        게시글 수 : {userInfo.Posts}
        <Card.Meta
          avatar={<Avatar>{userInfo.nickname[0]}</Avatar>}
          title={userInfo.nickname}
        />

      </Card>
    </AppLayout>
  );
}

export const getStaticProps = wrapper.getStaticProps(async (context) => {
  context.store.dispatch({
    type: LOAD_USER_REQUEST,
    data: 5,
  });
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});
