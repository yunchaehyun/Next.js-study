import PropTypes from "prop-types";
import Link from "next/link";
import React from 'react';

const AppLayout = ({ children }) => {
  return (
    <div>
      <div>
        {" "}
        <Link href="/">노드버드</Link>
        <Link href="/profile">프로필</Link>
        <Link href="/signup">회원가입</Link>
      </div>
      {children}
    </div>
  );
};

AppLayout.propTypes = {
  // node.js가 아니라 react의 node임
  children: PropTypes.node.isRequired,
};

export default AppLayout;
