import { request, response } from 'express';
import { utlJwt } from '../utils/index.utils.js';
import { User } from '../lib/conn.js';

const validateJWT = async (req = request, res = response, next) => {
  const token = req.header('api-token');
  if (!token)
    return res.status(401).json({
      message: 'Acceso denegado. No hay token en la petición',
    });

  try {
    const { id } = utlJwt.verifyToken(token);
    const user = await User.findByPk(id);
    if (!user)
      return res.status(401).json({
        message: 'Acceso denegado. Token no válido',
      });

    if (!user.status)
      return res.status(401).json({
        message: 'Acceso denegado. Usuario no válido',
      });

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({
      message: 'Token no válido',
    });
  }
};

export default { validateJWT };
