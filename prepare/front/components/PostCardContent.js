<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
=======
// 해시태그 링크를 만들기 위한 컴포넌트

import React from 'react';
>>>>>>> parent of 914c7584 (fix: fix ssr error)
import PropTypes from 'prop-types';
import Link from 'next/link';

function PostCardContent({ postData }) {
  return (
    <div>
      {/* 해시태그 선택하는 정규 표현식 */}
      {postData.split(/(#[^\s#]+)/g).map((v, i) => {
        if (v.match(/(#[^\s#]+)/)) {
<<<<<<< HEAD
          return (
            <Link
              href={{ pathname: '/hashtag', query: { tag: v.slice(1) } }}
              as={`/hashtag/${v.slice(1)}`}
              key={v}
            />
          );
=======
          return <Link key={i} href={`/hashtag/${v.slice(1)}`}>{v}</Link>;
>>>>>>> parent of 914c7584 (fix: fix ssr error)
        }
        return v;
      })}
    </div>
  );
}

PostCardContent.propTypes = {
  postData: PropTypes.string.isRequired,
};

export default PostCardContent;
