import React from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const followerList = [
  { nickname: "제로초" },
  { nickname: "바보" },
  { nickname: "노드버드오피셜" },
];
const followingList = [
  { nickname: "제로초" },
  { nickname: "바보" },
  { nickname: "노드버드오피셜" },
];

const Profile = () => {
  return (
    <>
      <Head>
        <title>내 프로필</title>
      </Head>
      <AppLayout>
        <div>내 프로필</div>
        <NicknameEditForm></NicknameEditForm>
        <FollowList header = '팔로워 목록' data={followerList}>test</FollowList>
        <FollowList header = '팔로잉 목록' data={followingList}></FollowList>
      </AppLayout>
    </>
  );
};

export default Profile;
