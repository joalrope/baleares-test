import { Request as Req, Response as Resp } from 'express';
import path from 'path';
import { getAllImages } from '../helper/getImgFiles';

export const uploadImage = async (req: Req, res: Resp) => {
  const images = await getAllImages();

  res.status(200).json({
    ok: true,
    msg: 'Successfully uploaded files',
  });
};

export const getImages = async (req: Req, res: Resp) => {
  const { id, userId } = req.params;
  const url = path.join(__dirname, `../../uploads/images/${userId}/${id}`);
  res.sendFile(url);
  /*res.status(200).json({
    ok: true,
    msg: 'getImage',
    result: url,
  });*/
};
