import React from 'react';
import { UploadForm } from '../../forms/upload/Upload';
import { CardGrid } from '../../ui/card/CardGrid';

export const Playground = () => {
  return (
    <div className='container'>
      <CardGrid />
      <UploadForm />
    </div>
  );
};
