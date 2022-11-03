import React, { useCallback, useState, useMemo } from "react";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import styled from "styled-components";
import PropTypes from 'prop-types';
const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const LoginForm = ({ setIsLoggedIn }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const style = useMemo(() => ({ marginTop: 10 }), []);
  // 컴포넌트에 props로 넘겨주는 함수는 꼭 useCallback => 최적화를 위해서
  // 리렌더링돼도 같은 객체 유지 => 리렌더링 최적화

  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    setIsLoggedIn(true);
  }, [id, password]);

  return (
    <>
      <Form onFinish={onSubmitForm}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <Input name="user-id" value={id} onChange={onChangeId}></Input>
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input
            name="user-password"
            type="password"
            value={password}
            onChange={onChangePassword}
          ></Input>
        </div>
        <ButtonWrapper style={style}>
          <Button type="primary" htmlType="submit" loading={false}>
            로그인
          </Button>
          <Link href="/signup">
            <Button>회원가입</Button>
          </Link>
        </ButtonWrapper>
      </Form>
    </>
  );
};
LoginForm.propTypes = {
  // node.js가 아니라 react의 node임
  setIsLoggedIn: PropTypes.node.isRequired,
};

export default LoginForm;
