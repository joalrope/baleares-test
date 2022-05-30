import { Request as Req, Response as Resp } from "express";

export const uploadImage = async (req: Req, res: Resp) => {
	try {
		res.status(200).json({
			ok: true,
			msg: "Successfully uploaded files",
		});
	} catch (error) {
		res.status(500).json({
			ok: false,
			msg: "Please, talk to the administrator",
		});
	}
};
