import { fetchPrivate } from '../helpers/fetch/fetchPrivate';

export const uploadImage = (data) => {
  return async (dispatch) => {
    try {
      const resultUpload = await dispatch(fetchPrivate('/uploads/images', data, 'POST', {}, 'multipart/form-data'));

      console.log({ resultUpload });

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

export const getImage = () => {
  return async (dispatch) => {
    const { ok, result } = await dispatch(fetchPrivate(`/quizzes/page/${'page'}/size/${'pageSize'}`));

    if (ok) {
      return result;
    }
  };
};
