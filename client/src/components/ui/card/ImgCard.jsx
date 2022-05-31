import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const baseUrl = process.env.REACT_APP_API_URL;

export const ImgCard = ({ userName, userId, image }) => {
  return (
    <Card
      hoverable
      style={{
        width: 170,
        height: 230,
      }}
      cover={
        <img alt={`${image}`} src={`${baseUrl}/uploads/user/${userId}/img/${image}`} style={{ height: '120px' }} />
      }
    >
      <Meta title={userName} description={image} />
    </Card>
  );
};
