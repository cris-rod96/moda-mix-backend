import { replyService } from '../../services/index.services.js';

const getByComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { code, message, replies } = await replyService.getByComment(id);
    return res.status(code).json(replies ? { replies } : { message });
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor',
    });
  }
};
const create = async (req, res) => {
  try {
    const data = req.body;
    const { code, message } = await replyService.create(data);
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
    const { code, message } = await replyService.remove(id);
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
    const { code, message } = await replyService.update(content, id);
    return res.status(code).json({ message });
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor',
    });
  }
};

export default { getByComment, create, remove, update };
