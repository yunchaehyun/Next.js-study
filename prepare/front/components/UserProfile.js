import React, { useCallback } from "react";
import { Avatar, Card, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { logoutRequestAction } from "../reducers/user";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { me, isLoggingOut } = useSelector((state) => state.user);
  const onLogOut = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);
  return (
    <>
      <Card
        actions={[
          <div key="twit">twit</div>,
          <div key="followings">팔로잉</div>,
          <div key="followers">팔로워</div>,
        ]}
      >
        <Card.Meta
          avatar={<Avatar>{me.nickname[0]}</Avatar>}
          title={me.nickname}
        />
        <Button onClick={onLogOut} loading={isLoggingOut}>
          로그아웃
        </Button>
      </Card>
    </>
  );
};

export default UserProfile;
