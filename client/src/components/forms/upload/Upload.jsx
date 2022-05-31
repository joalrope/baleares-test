import React, { useState } from 'react';
import { Button, Form, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import './upload.scss';

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 8,
  },
};

const url = `${process.env.REACT_APP_API_URL}/uploads/`;

export const UploadForm = () => {
  const [fileList, setFileList] = useState([]);

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }

    return e?.fileList;
  };

  /* const handleChange = (info) => {
    let newFileList = [...info.fileList]; // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new

    newFileList = fileList.slice(-2); // 2. Read from response and show file link

    newFileList = fileList.map((file) => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }

      return file;
    });
    setFileList(newFileList);
  }; */

  const onFinish = async (values) => {
    const data = new FormData();
    let { dragger } = values;
    for (let i = 0; i < dragger.length; i++) {
      data.append('images', dragger[i].originFileObj);
    }

    const { ok } = await fetch(url, {
      method: 'POST',
      headers: { Accept: '*/*', 'x-token': sessionStorage.token },
      body: data,
    });

    if (ok) {
      console.log({ ok });
      setFileList([]);
    }
  };

  return (
    <div className='form-container'>
      <Form className='upload-form' name='upload-form' {...formItemLayout} onFinish={onFinish}>
        <Form.Item className='form-item-container'>
          <Form.Item name='dragger' valuePropName='fileList' getValueFromEvent={normFile} noStyle>
            <Upload.Dragger
              name='files'
              multiple
              listType='picture'
              accept='.png, .jpg, .jpeg'
              //onChange={handleChange}
              beforeUpload={(file) => {
                return false;
              }}
              fileList={fileList}
            >
              <p className='ant-upload-drag-icon'>
                <InboxOutlined />
              </p>
              <p className='ant-upload-text'>Haga click o arrastre una imagen a esta area para subirla</p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>

        <Form.Item
          className='form-item-container'
          wrapperCol={{
            span: 12,
            offset: 0,
          }}
        >
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
