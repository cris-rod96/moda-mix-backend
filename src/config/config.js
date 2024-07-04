import 'dotenv/config';

const { PORT = 3000, URI_DATABASE, URI_CLOUDINARY } = process.env;

export { PORT, URI_CLOUDINARY, URI_DATABASE };
