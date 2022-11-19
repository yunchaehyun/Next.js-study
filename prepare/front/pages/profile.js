import React from 'react';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

function Profile() {
  const { me } = useSelector((state) => state.user);
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
