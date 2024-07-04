import { Sequelize } from 'sequelize';
import { URI_DATABASE } from '../config/config.js';

const conn = new Sequelize(URI_DATABASE, { logging: false, native: false });

export { conn };
