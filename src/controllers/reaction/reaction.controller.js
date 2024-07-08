import { reactionService } from '../../services/index.services.js';

const getByUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { code, reactions } = await reactionService.getByUser(id);
    return res.status(code).json({ reactions });
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor',
    });
  }
};
const getByProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { code, reactions } = await reactionService.getByProduct(id);
    return res.status(code).json({ reactions });
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor',
    });
  }
};
const create = async (req, res) => {
  try {
    const data = req.body;
    const { code, message } = await reactionService.create(data);
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
    const { code, message } = await reactionService.remove(id);
    return res.status(code).json({ message });
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor',
    });
  }
};
const update = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const { code, message } = await reactionService.update(id, data);
    return res.status(code).json({ message });
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor',
    });
  }
};

export default { getByProduct, getByUser, create, remove, update };
