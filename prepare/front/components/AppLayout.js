import PropTypes from 'prop-types';
import Link from 'next/link';
import React from 'react';
import { Menu, Input, Row, Col } from 'antd';
import styled, { createGlobalStyle } from 'styled-components';
import { useSelector } from 'react-redux';

import LoginFrom from './LoginForm';
import UserProfile from './UserProfile';

const SearchInput = styled(Input.Search)`
  vertical-align: "middle";
`;

const Global = createGlobalStyle`
.ant-row{
  margin-right: 0 !important;
  margin-left: 0 !important;
}

.ant-col:first-child {
  padding-left: 0 !important;
}

.ant-col:last-child{
  padding-right: 0 !important;
}

`;

// app.js와 다르게 AppLayout.js는 일부만 공통인 애들
function AppLayout({ children }) {
  // redux에서 받아오는거, logInComplete이 바뀌면 컴포넌트가 알아서 리렌더링됨
  const { me } = useSelector((state) => state.user);
  // 구조분해할당
  // const logInComplete = useSelector((state)=> state.user);
  return (
    <div>
      <Global />
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/"><a>노드버드</a></Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile"><a>프로필</a></Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput enterButton />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup"><a>회원가입</a></Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        {/* xs: 모바일 md: 데스크탑 */}
        <Col xs={24} md={6}>
          {me ? <UserProfile /> : <LoginFrom />}
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
}

AppLayout.propTypes = {
  // node.js가 아니라 react의 node임
  children: PropTypes.node.isRequired,
};

export default AppLayout;
