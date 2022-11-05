import PropTypes from "prop-types";
import Link from "next/link";
import React from "react";
import { Menu, Input, Row, Col } from "antd";
import UserProfile from "./UserProfile";
import LoginFrom from "./LoginForm";
import styled from "styled-components";
import {useSelector} from 'react-redux';

const SearchInput = styled(Input.Search)`
  vertical-align: "middle";
`;

// app.js와 다르게 AppLayout.js는 일부만 공통인 애들
const AppLayout = ({ children }) => {
  //redux에서 받아오는거, isLoggedIn이 바뀌면 컴포넌트가 알아서 리렌더링됨
  const isLoggedIn = useSelector((state)=> state.user.isLoggedIn);
  // const isLoggedIn = useSelector((state)=> state.user);

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">노드버드</Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">프로필</Link>
        </Menu.Item>{" "}
        <Menu.Item>
          <SearchInput enterButton></SearchInput>
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">회원가입</Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        {/* xs: 모바일 md: 데스크탑 */}
        <Col xs={24} md={6}>
          {isLoggedIn ? (
            // 이제 setIsLoggedIn={setIsLoggedIn} 이런거 안넘겨줘도됨.
            <UserProfile/>
          ) : (
            <LoginFrom />
          )}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          오른쪽 메뉴
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  // node.js가 아니라 react의 node임
  children: PropTypes.node.isRequired,
};

export default AppLayout;
