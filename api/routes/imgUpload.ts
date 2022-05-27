import { Router } from "express";
import { check } from "express-validator";
import { fieldsValidator } from "../middlewares/fields-validator";
import { jwtValidator } from "../middlewares/jwt-validator";
import { imgUpload } from "../controllers/upload";

export const imgUploadRouter = Router();

imgUploadRouter.use(jwtValidator);

imgUploadRouter.post(
	"/",
	[
		check("image").exists().withMessage("No hay imagen para guardar"),
		check("usuario").exists().withMessage("El usuario es Obligatorio"),
		fieldsValidator,
	],
	imgUpload
);
