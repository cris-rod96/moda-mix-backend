import { Cart, CartDetail, User } from '../../lib/conn.js';

const getAll = async () => {
  const carts = await Cart.findAll({
    where: {
      status: true,
    },
  });
  return { code: 200, carts };
};

const getByUser = async (UserId) => {
  const userExist = await User.findByPk(UserId);
  if (!userExist) return { code: 400, message: 'Usuario no encontrado' };
  const cart = await Cart.findOne({
    where: {
      UserId,
      status: true,
    },
  });
  return cart
    ? { code: 200, cart }
    : { code: 400, message: 'Carrito no encontrado.' };
};

const create = async (UserId) => {
  const userExist = await User.findByPk(UserId);
  if (!userExist) return { code: 400, message: 'Usuario no válido' };

  const [cart, created] = await Cart.findOrCreate({
    where: {
      UserId,
    },
    defaults: { UserId },
  });
  return created
    ? { code: 201, message: 'Carrito creado con éxito', cart }
    : { code: 400, message: 'El usuario ya tiene un carro de compras creado' };
};

const remove = async (id) => {
  const cart = await Cart.findOne({
    where: {
      id,
      status: true,
    },
  });
  if (!cart)
    return { code: 400, message: 'Error. Carrito de compras no encontrado' };

  cart.status = false;
  await cart.save();
  return { code: 200, message: 'Carrito de compras eliminado con éxito' };
};

export default { getAll, getByUser, create, remove };
