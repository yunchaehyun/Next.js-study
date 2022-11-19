import PropTypes from 'prop-types';
import React from 'react';
import 'antd/dist/antd.css';
import Head from 'next/head';
import wrapper from '../store/configureStore';

// app.js는 전체 공통 부분
function App({ Component }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>title test</title>
      </Head>
      <Component />
    </>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);
