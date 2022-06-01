import { Router } from "express";
import { uploader } from "../middlewares/multer";
import {
	deleteImage,
	getImage,
	getImages,
	uploadImage,
} from "../controllers/upload";
//import { jwtValidator } from "../middlewares/jwt-validator";

export const uploadRouter = Router();

//uploadRouter.use(jwtValidator);

uploadRouter.post("/", uploader, uploadImage);
uploadRouter.get("/images", [], getImages);
uploadRouter.get("/user/:userId/img/:img", [], getImage);
uploadRouter.delete("/user/:userId/img/:img", [], deleteImage);
