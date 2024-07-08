import { commentService } from '../../services/index.services.js';

const getAll = async (req, res) => {
  try {
    const { code, comments } = await commentService.getAll();
    return res.status(code).json({ comments });
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor',
    });
  }
};
const getByProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { code, comments, message } = await commentService.getByProduct(id);
    return res.status(code).json(comments ? { comments } : { message });
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor',
    });
  }
};
const getByUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { code, comments, message } = await commentService.getByUser(id);
    return res.status(code).json(comments ? { comments } : { message });
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor',
    });
  }
};
const create = async (req, res) => {
  try {
    const data = req.body;
    const { code, message } = await commentService.create(data);
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
    const { code, message } = await commentService.remove(id);
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
    const { content } = req.body;
    const { code, message } = await commentService.update(content, id);
    return res.status(code).json({ message });
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor',
    });
  }
};
export default { getAll, getByProduct, getByUser, create, remove, update };
