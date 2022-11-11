import React, { useCallback } from "react";
import { Avatar, Card, Button } from "antd";
import { useDispatch } from "react-redux";
import {logoutAction} from '../reducers/user'

const UserProfile = () => {

    const dispatch = useDispatch();
    const onLogOut = useCallback(() => {
       dispatch(logoutAction())
    },[]);
  return (
    <>
      <Card
        actions={[
          <div key="twit">twit</div>,
          <div key="followings">팔로잉</div>,
          <div key="followers">팔로워</div>,
        ]}
      >
        <Card.Meta avatar={<Avatar>C</Avatar>} title="Chaehyun" />
        <Button onClick = {onLogOut}>로그아웃</Button>
      </Card>
      
    </>
  );
};

export default UserProfile;
