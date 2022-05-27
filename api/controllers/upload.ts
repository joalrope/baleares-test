import { Request as Req, Response as Resp } from "express";

export const imgUpload = async (req: Req, res: Resp) => {
	try {
	} catch (error) {
		res.status(500).json({
			ok: false,
			msg: "Please, talk to the administrator",
		});
	}
};
