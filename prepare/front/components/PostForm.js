import { Form, Input, Button } from 'antd';
import React, { useCallback, useState, useRef, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line import/named
import { addPostRequestAction, REMOVE_IMAGE, UPLOAD_IMAGES_REQUEST } from '../reducers/post';
// eslint-disable-next-line import/named

function PostForm() {
  const { imagePaths, addPostLoading, addPostDone } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const onRemoveImage = useCallback((index) => () => {
    dispatch({
      type: REMOVE_IMAGE,
      data: index,
    });
  });
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

  const onChangeImages = useCallback((e) => {
    console.log('images', e.target.files);
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (f) => {
      imageFormData.append('image', f);
    });
    dispatch({
      type: UPLOAD_IMAGES_REQUEST,
      data: imageFormData,
    });
  });
  return (
    <>
      {/* 일단 기능 구현 하고 refacoring할 때, 성능 측정 해보면서 useMemo 사용해주기. */}

      <Form style={{ margin: '10px 0 20px' }} encType="multipart/form-data" onFinish={onSubmit}>
        <Input.TextArea
          value={text}
          onChange={onChangeText}
          maxLength={140}
          placeholder="어떤 신기한 일이 있었나요?"
        />
        <div>
          <input type="file" name="image" multiple hidden ref={imageInput} onChange={onChangeImages} />
          <Button onClick={onClickImageUpload}>이미지 업로드</Button>
          <Button type="primary" style={{ float: 'right' }} htmlType="submit">짹짹</Button>
        </div>
        <div>
          {imagePaths.map((v, i) => (
            <div key={v} style={{ display: 'inline-block' }}>
              <img src={`http://localhost:3065/${v}`} style={{ width: '200px' }} alt={v} />
              <div>
                <Button onClick={onRemoveImage(i)}>제거</Button>
              </div>
            </div>
          ))}
        </div>
      </Form>
    </>
  );
}

export default PostForm;
