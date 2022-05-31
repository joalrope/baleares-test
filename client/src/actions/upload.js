import { fetchPrivate } from "../helpers/fetch/fetchPrivate";

export const getImages = (data) => {
	return async (dispatch) => {
		try {
			const resultUpload = await dispatch(
				fetchPrivate("/uploads/images", data, "POST", {}, "multipart/form-data")
			);

			const { ok, msg, result } = resultUpload;
			if (ok) {
				console.log(msg, result);
			} else {
				console.log(msg);
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const getImagexxx = () => {
	return async (dispatch) => {
		const { ok, result } = await dispatch(
			fetchPrivate(`/quizzes/page/${"page"}/size/${"pageSize"}`)
		);

		if (ok) {
			return result;
		}
	};
};
