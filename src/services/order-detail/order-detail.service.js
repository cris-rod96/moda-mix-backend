import { Order, OrderDetail } from '../../lib/conn.js';

const getAll = async () => {
  const orderDetails = await OrderDetail.findAll({
    where: {
      status: true,
    },
  });
  return { code: 200, orderDetails };
};

const getByOrder = async (OrderId) => {
  const orderDetails = await OrderDetail.findAll({
    where: {
      status: true,
      OrderId,
    },
  });
  return { code: 200, orderDetails };
};

const create = async (data) => {
  const existOrder = await Order.findOne({
    where: {
      status: true,
      OrderId: data.OrderId,
    },
  });
  if (!existOrder)
    return { code: 400, message: 'El pedido proporcionado no es válido.' };
  const orderDetails = await OrderDetail.bulkCreate(data);

  return orderDetails.length > 0
    ? { code: 201, message: 'Detalle de pedido creado con éxito' }
    : {
        code: 400,
        message:
          'Error al crear el detalle de pedido. Intente de nuevo o contacte con el administrador',
      };
};

const remove = async (id) => {
  const orderDetail = await OrderDetail.findOne({
    where: {
      id,
      status: true,
    },
  });
  if (!orderDetail)
    return { code: 400, message: 'Detalle de pedido no encontrado' };

  orderDetail.status = false;
  await orderDetail.save();
  return { code: 200, message: 'Detalle de pedido eliminado con éxito.' };
};

export default { getAll, getByOrder, create, remove };
