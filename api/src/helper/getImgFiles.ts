import glob from 'glob';
import path from 'path';

export const getAllImages = () => {
  return new Promise((resolve, reject) => {
    const pattern = path.join(__dirname, `../../uploads/images/**/*`);

    glob(pattern, (err, matches) => {
      const filename = path.parse(
        '/Users/carlosjavierbermudez/Documents/joalrope/Desarrollo Web/Pruebas Tecnicas/baleares-test/api/uploads/images/629487c2c6141b6982cb119e/IMG-20220308-WA0035.jpg'
      ).base;
      console.log(filename);

      if (err) {
        reject(err);
        return;
      }
      resolve(matches);
    });
  });
};
