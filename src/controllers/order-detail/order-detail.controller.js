import { orderDetailService } from '../../services/index.services.js';

const getAll = async (req, res) => {
  try {
    const { code, orderDetails } = await orderDetailService.getAll();
    return res.status(code).json({ orderDetails });
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor',
    });
  }
};
const getByOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const { code, orderDetails } = await orderDetailService.getByOrder(id);
    return res.status(code).json({ orderDetails });
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor',
    });
  }
};
const create = async (req, res) => {
  try {
    const data = req.body;
    const { code, message } = await orderDetailService.create(data);
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
    const { code, message } = await orderDetailService.remove(id);
    return res.status(code).json({ message });
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor',
    });
  }
};

export default { getAll, getByOrder, create, remove };
