import jwt from 'jsonwebtoken';
import { SUPER_SECRET_PASSWORD } from '../../config/config.js';

const { sign, verify } = jwt;

const generateToken = (payload) =>
  sign(payload, SUPER_SECRET_PASSWORD, { expiresIn: '5h' });
const verifyToken = (token) => verify(token, SUPER_SECRET_PASSWORD);

export default { generateToken, verifyToken };
