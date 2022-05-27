import { Request as Req, Response as Resp, NextFunction } from 'express';

export const uploadFile = (req: Req, res: Resp, next: NextFunction) => {
  console.log(req);
};
