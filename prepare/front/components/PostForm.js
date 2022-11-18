import { Form, Input, Button } from "antd";
import { useCallback } from "react";
import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, addPostRequestAction, addPostDone } from "../reducers/post";
import { useInput } from "../hooks/useInput";

const PostForm = () => {
  const { imagePaths } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    if (addPostDone) {
      setText("");
    }
  }, [addPostDone]);

  const onSubmit = useCallback(() => {
    dispatch(addPostRequestAction(text));
  }, [text]);

  const [text, onChangeText, setText] = useInput("");
  
  const imageInput = useRef();
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  return (
    <>
      {/* 일단 기능 구현 하고 refacoring할 때, 성능 측정 해보면서 useMemo 사용해주기. */}

      <Form
        style={{ margin: "10px 0 20px" }}
        encType="multipart/form-data"
        onFinish={onSubmit}
      >
        <Input.TextArea
          value={text}
          onChange={onChangeText}
          maxLength={140}
          placeholder="어떤 신기한 일이 있었나요?"
        />

        <div>
          <input type="file" multiple hidden ref={imageInput} />
          <Button onClick={onClickImageUpload}>이미지 업로드</Button>
          <Button type="primary" style={{ float: "right" }} htmlType="submit">
            게시글 작성
          </Button>
        </div>
        <div>
          {imagePaths.map((v) => {
            <div key={v} style={{ display: "block" }}>
              <img src={v} style={{ width: "200px" }} alt={v} />
              <div>
                <Button>제거</Button>
              </div>
            </div>;
          })}
        </div>
      </Form>
    </>
  );
};

export default PostForm;
