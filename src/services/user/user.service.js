import { Op } from 'sequelize';
import { User } from '../../lib/conn.js';
import { utlBcrypt, utlCloudinary } from '../../utils/index.utils.js';

const getAll = async () => {
  const users = await User.findAll({
    where: {
      status: true,
    },
  });
  return users;
};

const create = async (data) => {
  console.log(data);
  const userExist = await User.findOne({
    where: {
      [Op.or]: [{ email: data.email }, { phone: data.phone }],
    },
  });

  if (userExist)
    return {
      code: 400,
      message: 'Error al crear usuario. Información duplicada',
    };
  const password = await utlBcrypt.hashPassword(data.password);
  const image = await utlCloudinary.uploadImage(
    'users',
    data.fullName.toLowerCase(),
    data.image
  );
  const user = await User.create({
    ...data,
    image,
    password,
  });
  return user
    ? { code: 201, message: 'Usuario creado con éxito' }
    : {
        code: 400,
        message:
          'Error al crear usuario. Intente de nuevo o contacte con el administrador',
      };
};

const remove = async (id) => {
  const user = await User.findOne({
    where: {
      id,
      status: true,
    },
  });
  if (!user) return { code: 400, message: 'Usuario no encontrado' };
  user.status = false;
  await user.save();
  return { code: 200, message: 'Usuario eliminado con éxito' };
};

const update = async (id, data) => {
  const user = await User.findOne({
    where: {
      id,
      status: true,
    },
  });
  if (!user) return { code: 400, message: 'No existe el usuario.' };
  const conflict = await User.findOne({
    where: {
      [Op.or]: [{ email: data.email }, { phone: data.phone }],
      id: { [Op.ne]: id }, // Excluir el registro actual por ID
    },
  });
  if (conflict)
    return {
      code: 400,
      message: 'Ya existe otro usuario con estas credenciales',
    };

  const [updated] = await User.update(data, { where: { id } });
  return updated
    ? { code: 200, message: 'Usuario actualizado' }
    : { code: 400, message: 'Error al actualizar el usuario' };
};

export default { getAll, create, remove, update };
