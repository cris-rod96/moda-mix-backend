import { v2 as cloudinary } from 'cloudinary';
import { PREFIXES } from '../../data/prefixes.js';

const uploadImage = async (folder, name, file) => {
  const { secure_url } = await cloudinary.uploader.upload(file, {
    folder,
    public_id: `${PREFIXES.USERS}-${name}`,
  });
  return secure_url;
};

export default { uploadImage };
