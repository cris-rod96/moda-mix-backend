import { CartDetail } from '../../lib/conn.js';

const addItems = async (CartId, items) => {
  const deleteItems = await CartDetail.destroy({
    where: {
      CartId,
    },
  });

  await CartDetail.bulkCreate({
    ...items,
    CartId,
  });
  return { code: 201, message: 'Productos añadidos con éxito al carrito' };
};

const getItemsByCart = async (CartId) => {
  const cartItems = await CartDetail.findAll({
    where: {
      CartId,
    },
  });
  return { code: 200, cartItems };
};

const deleteItem = async (id) => {
  const deleted = await CartDetail.destroy({
    where: {
      id,
    },
  });
  return deleted > 0
    ? { code: 200, message: 'Producto eliminado del carrito' }
    : { code: 400, message: 'Error al eliminar el producto del carrito' };
};

export default { addItems, getItemsByCart, deleteItem };
