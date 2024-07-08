import { PREFIXES } from '../../data/prefixes.js';
import { Order } from '../../lib/conn.js';
import { utlrds } from '../../utils/index.utils.js';

const getAll = async () => {
  const orders = await Order.findAll({
    where: {
      status: true,
    },
  });
  return { code: 200, orders };
};

const getByUser = async (UserId) => {
  const orders = await Order.findAll({
    where: {
      UserId,
      status: true,
    },
  });
  return { code: 200, orders };
};

const create = async (data) => {
  const code = utlrds.generateCode(PREFIXES.ORDER);
  const order = await Order.create({
    ...data,
    code,
  });
  return { code: 201, message: 'Pedido generado con éxito', order };
};

const remove = async (id) => {
  const order = await Order.findOne({
    where: {
      id,
      status: true,
    },
  });
  if (!order) return { code: 400, message: 'Pedido no encontrado' };
  order.status = false;
  await order.save();
  return { code: 200, message: 'Pedido eliminado con éxito' };
};

const updateStatus = async (status, id) => {
  const order = await Order.findOne({
    where: {
      id,
      status: true,
    },
  });
  if (!order) return { code: 400, message: 'Pedido no encontrado' };
  order.statusOrder = status;
  await order.save();
  return { code: 200, message: 'Pedido actualizado con éxito' };
};

export default { getAll, getByUser, create, remove, updateStatus };
