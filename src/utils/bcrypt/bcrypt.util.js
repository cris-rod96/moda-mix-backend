import bcrypt from 'bcrypt';

const { hash, compare } = bcrypt;

const hashPassword = async (password) => await hash(password, 13);
const comparePassword = async (password, hash) => await compare(password, hash);

export default { hashPassword, comparePassword };
