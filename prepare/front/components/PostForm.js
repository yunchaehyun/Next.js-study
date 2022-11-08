import { Form, Input, Button } from "antd";
import { useCallback } from "react";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const PostForm = () => {
  const { imagePaths } = useSelector((state) => state.post);
  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);
  const onSubmit = useCallback(() => {}, []);

  const [text, setText] = useState("");
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
          <input type="file" multiple hidden />
          <Button>이미지 업로드</Button>
          <Button type="primary" style={{ float: "right" }} htmlType="submit">
            게시글 작성
          </Button>
        </div>
        <div>
          {imagePaths.map((v) => {
            <div key={v} style={{ display: "inline-block" }}>
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
