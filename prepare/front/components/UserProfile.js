import React, { useCallback } from "react";
import { Avatar, Card, Button } from "antd";
import PropTypes from 'prop-types';

const UserProfile = ({setIsLoggedIn}) => {


    const onLogOut = useCallback(() => {
       setIsLoggedIn(false); 
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

UserProfile.propTypes = {
     // node.js가 아니라 react의 node임
  setIsLoggedIn: PropTypes.node.isRequired,
}
export default UserProfile;
