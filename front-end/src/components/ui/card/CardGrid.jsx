import { Col, Row } from 'antd';
import React from 'react';
import { ImgCard } from './ImgCard';
import './card-grid.scss';

export const CardGrid = () => {
  const images = [
    { id: '1001', name: 'Jose Rodriguez', userId: '62943d6c11ffab036b9997f5', image: 'Cedula Cheo.jpg' },
    { id: '1002', name: 'Jose Rodriguez', userId: '62943d6c11ffab036b9997f5', image: 'joalrope.jpg' },
    { id: '1003', name: 'Jose Rodriguez', userId: '62943d6c11ffab036b9997f5', image: 'joalrope200x200.png' },
    { id: '1004', name: 'Jose Rodriguez', userId: '62943d6c11ffab036b9997f5', image: 'Cedula Cheo.jpg' },
    { id: '1005', name: 'Jose Rodriguez', userId: '62943d6c11ffab036b9997f5', image: 'joalrope.jpg' },
    { id: '1006', name: 'Jose Rodriguez', userId: '62943d6c11ffab036b9997f5', image: 'joalrope200x200.png' },
  ];

  return (
    <Row gutter={[24, 24]} justify='space-around' className='row-card'>
      {images.map((img) => (
        <Col key={img.id} xs={24} sm={18} md={12} lg={8} xl={4} style={{ display: 'flex', justifyContent: 'center' }}>
          <ImgCard userName={img.name} userId={img.userId} image={img.image} />
        </Col>
      ))}
    </Row>
  );
};
