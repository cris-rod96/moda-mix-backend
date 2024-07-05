import { v2 as cloudinary } from 'cloudinary';
import { PREFIXES } from '../../data/prefixes.js';

const uploadImage = async (folder, name, prefix, file) => {
  const { secure_url } = await cloudinary.uploader.upload(file, {
    folder: `moda-mix/${folder}`,
    public_id: `${PREFIXES[prefix]}-${name}`,
  });
  return secure_url;
};

export default { uploadImage };
