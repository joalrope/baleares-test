import express, { Express } from "express";
import cors from "cors";
import { config } from "dotenv";
import { dbConnection } from "./database/config";
import { userRouter } from "./routes/auth";
import { cipherRouter } from "./routes/cipher";
import { imgUploadRouter } from "./routes/imgUpload";
import { dbConnectionSatus } from "./middlewares/dbConectionStatus";

config();

const app: Express = express();

dbConnection();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.use("/api/cipher", cipherRouter);
app.use(dbConnectionSatus);
app.use("/api/auth", userRouter);
app.use("/api/imgUpload", imgUploadRouter);

const port = process.env.PORT;

app.listen(port, () => {
	console.log(`⚡️[server]: Servidor corriendo en https://localhost:${port}`);
});
