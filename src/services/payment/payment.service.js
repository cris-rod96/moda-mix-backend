import { PAYMENT_STATUS } from '../../data/enums.js';
import { PREFIXES } from '../../data/prefixes.js';
import { Order, Payment, User } from '../../lib/conn.js';
import { utlCloudinary, utlrds } from '../../utils/index.utils.js';

const getAll = async () => {
  const payments = await Payment.findAll({
    where: {
      status: true,
    },
  });
  return { code: 200, payments };
};

const getByUser = async (UserId) => {
  const payments = await Payment.findAll({
    where: {
      status: true,
      UserId,
    },
  });
  return { code: 200, payments };
};

const getById = async (id) => {
  const payment = await Payment.findOne({
    where: {
      status: true,
      id,
    },
  });
  return payment
    ? { code: 200, payment }
    : { code: 400, message: 'Pago no encontrado' };
};

const create = async (data) => {
  const existUser = await User.findByPk(data.UserId);
  const existOrder = await Order.findByPk(data.OrderId);
  if (!existOrder || !existUser)
    return {
      code: 400,
      message: 'Error al crear el. El usuario o la orden no son válidos',
    };

  const code = utlrds.generateCode(PREFIXES.PAYMENT);

  const create = await Payment.create({
    ...data,
    code,
  });
  return create
    ? { code: 201, message: 'Pago generado con éxito' }
    : { code: 400, message: 'Error. No se pudo generar el pago' };
};

const setVoucher = async (voucherImage, code, id) => {
  const payment = await Payment.findOne({
    where: {
      id,
    },
  });
  if (!payment) return { code: 400, message: 'No se encontró el pago.' };
  const voucher = await utlCloudinary.uploadImage(
    'vouchers',
    code,
    PREFIXES.PAYMENT,
    voucherImage
  );
  payment.voucher = voucher;
  payment.statusPayment = 'En verificación';
  await payment.save();
  return { code: 200, message: 'Comprobante agregado con éxito.' };
};

const setStatusPayment = async (statusPayment, id) => {
  const payment = await Payment.findOne({
    where: {
      id,
    },
  });
  if (!payment) return { code: 400, message: 'No se encontró el pago.' };
  payment.statusPayment = statusPayment;
  await payment.save();
  return { code: 200, message: 'Comprobante actualizado con éxito.' };
};

const remove = async (id) => {
  const payment = await Payment.findOne({
    where: {
      status: true,
      id,
    },
  });
  if (!payment) return { code: 400, message: 'No se encontró el pago.' };
  payment.status = false;
  await payment.save();
  return { code: 200, message: 'Pago eliminado con éxito' };
};

export default {
  getAll,
  getById,
  getByUser,
  create,
  setVoucher,
  setStatusPayment,
  remove,
};
