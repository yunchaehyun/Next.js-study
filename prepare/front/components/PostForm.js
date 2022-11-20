import { Form, Input, Button } from 'antd';
import React, { useCallback, useState, useRef, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line import/named
import { addPostRequestAction } from '../reducers/post';
// eslint-disable-next-line import/named
import { useInput } from '../hooks/useInput';

function PostForm() {
  const { imagePaths, addPostLoading, addPostDone } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  useEffect(() => {
    if (addPostDone) {
      setText('');
    }
  }, [addPostDone]);

  const onSubmit = useCallback(() => {
    dispatch(addPostRequestAction(text));
  }, [text]);

  const imageInput = useRef();
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  return (
    <>
      {/* 일단 기능 구현 하고 refacoring할 때, 성능 측정 해보면서 useMemo 사용해주기. */}

      <Form
        style={{ margin: '10px 0 20px' }}
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
          <Button type="primary" style={{ float: 'right' }} htmlType="submit" loading={addPostLoading}>
            게시글 작성
          </Button>
        </div>
        <div>
          {/* eslint-disable-next-line array-callback-return */}
          {imagePaths.map((v) => {
            <div key={v} style={{ display: 'block' }}>
              <img src={v} style={{ width: '200px' }} alt={v} />
              <div>
                <Button>제거</Button>
              </div>
            </div>;
          })}
        </div>
      </Form>
    </>
  );
}

export default PostForm;
