import { Button, Card, Popover, Avatar, List, Comment } from "antd";
import {
  RetweetOutlined,
  HeartTwoTone,
  HeartOutlined,
  MessageOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import PostImages from "./PostImages";
import CommentForm from "./CommentForm";
import PostCardContent from './PostCardContent';

// 게시글 구현 코드
const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const onToggleLike = useCallback(() => {
    setLiked((prev) => !prev);
  }, []);
  // 댓글 창 여는 함수
  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev);
  }, []);
  const id = useSelector((state) => state.user.me?.id);
  console.log(id);
  console.log(post.User.id);
  return (
    <>
      <div style={{ marginBottom: 10 }}>
        <Card
          cover={post.Images[0] && <PostImages images={post.Images} />}
          actions={[
            <RetweetOutlined key="retweet" />,
            liked ? (
              <HeartTwoTone
                twoToneColor="#eb2f96"
                key="heart"
                onClick={onToggleLike}
              />
            ) : (
              <HeartOutlined key="heart" onClick={onToggleLike} />
            ),
            <MessageOutlined key="comment" onClick={onToggleComment} />,
            <Popover
              key="ellipsis"
              content={
                <Button.Group>
                  {id && post.User.id === id ? (
                    <>
                      <Button>수정</Button>
                      <Button type="danger">삭제</Button>
                    </>
                  ) : (
                    <Button>신고</Button>
                  )}
                </Button.Group>
              }
            >
              <EllipsisOutlined />
            </Popover>,
          ]}
        >
          <Card.Meta
            avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
            title={post.User.nickname}
            description={<PostCardContent postData={post.content} />}
          ></Card.Meta>
        </Card>
        {commentFormOpened && (
          <div>
            {/* 게시글의 id를 commentform이 받아야 하기 때문에 post를 넘겨줌.
            댓글은 게시글에 상속되기 때문 */}
            <CommentForm post={post} />
            <List
              header={`${post.Comment.length}개의 댓글`}
              itemLayout="horizontal"
              dataSource={post.Comment}
              renderItem={(item) => (
                // item은 post.Comments의 객체 하나하나를 의미함
                <li>
                  <Comment
                    author={item.User.nickname}
                    avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                    content={item.content}
                  ></Comment>
                </li>
              )}
            />
          </div>
        )}
      </div>
    </>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    createdAt: PropTypes.object,
    // 객체들의 배열 arrayof(object)
    Comment: PropTypes.arrayOf(PropTypes.object),
    Images: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default PostCard;
