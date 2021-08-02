const { v4: uuidv4 } = require('uuid');
const params = fileName => {
  const myFile = fileName.originalname.split('.');
  const fileType = myFile[myFile.length - 1];

  const imageParams = {
    Bucket: 'user-images-2666b39f-34c5-48df-89ee-329d63d86545',
    Key: `${uuidv4()}.${fileType}`,
    Body: fileName.buffer
  };

  return imageParams;
};
module.exports = params;