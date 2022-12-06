import React, { useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';
import { LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWERS_REQUEST } from '../reducers/user';

function Profile() {
  const { me } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: LOAD_FOLLOWERS_REQUEST,
    });

    dispatch({
      type: LOAD_FOLLOWINGS_REQUEST,
    });
  }, []);

  useEffect(() => {
    if (!(me && me.id)) {
      Router.push('/');
    }
  }, [me && me.id]);

  return (
    <>
      <Head>
        <title>내 프로필</title>
      </Head>
      <AppLayout>
        <div>내 프로필</div>
        <NicknameEditForm />
        <FollowList header="팔로잉" data={me.Followings}>
          test
        </FollowList>
        <FollowList header="팔로워" data={me.Followers} />
      </AppLayout>
    </>
  );
}

export default Profile;
