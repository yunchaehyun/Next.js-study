// 해시태그 링크를 만들기 위한 컴포넌트

import React from "react";
import PropTypes from "prop-types";
import Link from 'next/link';

const PostCardContent = ({ postData }) => {
  return (
    <>
      <div>
        {/* 해시태그 선택하는 정규 표현식 */}
        {postData.split(/(#[^\s#]+)/g).map((v,i) => {
            if(v.match(/(#[^\s#]+)/)){
                return <Link key={i} href = {`/hashtag/${v.slice(1)}`}>{v}</Link>
            }
            return v;
        })}
      </div>
    </>
  );
};

PostCardContent.propTypes = {
  postData: PropTypes.string.isRequired,
};

export default PostCardContent;
