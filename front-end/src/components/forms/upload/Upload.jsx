import React from 'react';
import { Button, Form, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import './upload.scss';

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

export const UploadForm = () => {
  const normFile = (e) => {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
      return e;
    }

    return e?.fileList;
  };

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className='forms-container'>
      <Form name='validate_other' {...formItemLayout} onFinish={onFinish}>
        <Form.Item label='Dragger'>
          <Form.Item name='dragger' valuePropName='fileList' getValueFromEvent={normFile} noStyle>
            <Upload.Dragger name='files' action='/upload.do'>
              <p className='ant-upload-drag-icon'>
                <InboxOutlined />
              </p>
              <p className='ant-upload-text'>Click or drag file to this area to upload</p>
              <p className='ant-upload-hint'>Support for a single or bulk upload.</p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            span: 12,
            offset: 6,
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
