import { paymentService } from '../../services/index.services.js';

const getAll = async (req, res) => {
  try {
    const { code, payments } = await paymentService.getAll();
    return res.status(code).json({ payments });
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor.',
    });
  }
};
const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const { code, payment, message } = await paymentService.getById(id);
    return payment
      ? res.status(code).json({ payment })
      : res.status(code).json({ message });
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor.',
    });
  }
};
const getByUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { code, payments } = await paymentService.getByUser(id);
    return res.status(code).json({ payments });
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor.',
    });
  }
};
const create = async (req, res) => {
  try {
    const data = req.body;
    const { code, message } = await paymentService.create(data);
    return res.status(code).json({ message });
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor.',
    });
  }
};
const setVoucher = async (req, res) => {
  try {
    const { voucher } = req.body;
    const { code, message } = await paymentService.setVoucher(voucher);
    return res.status(code).json({ message });
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor.',
    });
  }
};
const setStatusPayment = async (req, res) => {
  try {
    const { statusPayment } = req.body;
    const { code, message } = await paymentService.setStatusPayment(
      statusPayment
    );
    return res.status(code).json({ message });
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor.',
    });
  }
};
const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const { code, message } = await paymentService.remove(id);
    return res.status(code).json({ message });
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor.',
    });
  }
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
