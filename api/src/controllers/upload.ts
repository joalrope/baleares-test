import { Request as Req, Response as Resp } from 'express';
import glob from 'glob';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { User } from '../models/User';

interface imgFile {
  id: string;
  name: string;
  userId: string;
  image: string;
}

export const uploadImage = async (req: Req, res: Resp) => {
  res.status(200).json({
    ok: true,
    msg: 'Successfully uploaded files',
  });
};

export const getImage = async (req: Req, res: Resp) => {
  const { id, userId } = req.params;
  const url = path.join(__dirname, `../../uploads/images/${userId}/${id}`);
  res.sendFile(url);
};

export const getImages = async (req: Req, res: Resp) => {
  let result: imgFile[] | undefined = [];
  const data: string[][] = await searchImages('uploads/images/**/*');

  data.map(async (item) => {
    if (item.length > 0) {
      const [userId, image] = item;
      let user = await User.findById(userId);
      console.log(user);
      const itemJson: imgFile = { id: uuidv4(), name: 'cheo', userId, image };
      result!.push(itemJson);
    }
  });

  res.status(200).json({
    ok: true,
    msg: 'Successfully catched files',
    result,
  });
};

const searchImages = (pattern: string): Promise<string[][]> => {
  return new Promise((resolve, reject) => {
    glob(pattern, (error, files) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(
        files.map((file) => {
          return file
            .substring(pattern.length - 4)
            .split('/')
            .filter((v, i, a) => a.length > 1);
        })
      );
    });
  });
};
