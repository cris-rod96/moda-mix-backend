import { orderService } from '../../services/index.services.js';

const getAll = async (req, res) => {
  try {
    const { code, orders } = await orderService.getAll();
    return res.status(code).json({ orders });
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor',
    });
  }
};

const getByUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { code, orders } = await orderService.getByUser(id);
    return res.status(code).json({ orders });
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor',
    });
  }
};

const create = async (req, res) => {
  try {
    const data = req.body;
    const { code, message } = await orderService.create(data);
    return res.status(code).json({ message });
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor',
    });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const { code, message } = await orderService.remove(id);
    return res.status(code).json({ message });
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor',
    });
  }
};

const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const { id } = req.params;
    const { code, message } = await orderService.updateStatus(status, id);
    return res.status(code).json({ message });
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor',
    });
  }
};

export default { getAll, getByUser, create, remove, updateStatus };
