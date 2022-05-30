import { Router } from "express";
import { uploader } from "../middlewares/multer";
import { jwtValidator } from "../middlewares/jwt-validator";
import { uploadImage } from "../controllers/upload";

export const uploadRouter = Router();

uploadRouter.use(jwtValidator);

uploadRouter.post("/images", uploader, uploadImage);
