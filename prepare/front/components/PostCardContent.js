import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

function PostCardContent({ postData }) {
  return (
    <div>
      {/* 해시태그 선택하는 정규 표현식 */}
      {postData.split(/(#[^\s#]+)/g).map((v, i) => {
        if (v.match(/(#[^\s#]+)/)) {
          return (
            <Link
              href={{ pathname: '/hashtag', query: { tag: v.slice(1) } }}
              as={`/hashtag/${v.slice(1)}`}
              key={v}
            />
          );
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
