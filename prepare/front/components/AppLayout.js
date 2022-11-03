import PropTypes from "prop-types";
import Link from "next/link";
import React from "react";
import { Menu } from "antd";

const AppLayout = ({ children }) => {
  return (
    <div>
  
        <Menu mode = "horizontal">
          <Menu.Item>
            <Link href="/">노드버드</Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/profile">프로필</Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/signup">회원가입</Link>
          </Menu.Item>
        </Menu>
 
      {children}
    </div>
  );
};

AppLayout.propTypes = {
  // node.js가 아니라 react의 node임
  children: PropTypes.node.isRequired,
};

export default AppLayout;
