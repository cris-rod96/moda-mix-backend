import { cartService } from '../../services/index.services.js';

const getAll = async (req, res) => {
  try {
    const { code, carts } = await cartService.getAll();
    return res.status(code).json({ carts });
  } catch (error) {
    return res.status(500).json({ message: 'Error interno en el servidor' });
  }
};
const getByUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { code, message, cart } = await cartService.getByUser(id);
    return code == 200
      ? res.status(code).json({ cart })
      : res.status(code).json({ message });
  } catch (error) {
    return res.status(500).json({ message: 'Error interno en el servidor' });
  }
};
const create = async (req, res) => {
  try {
    const { UserId } = req.body;
    const { code, message } = await cartService.create(UserId);
    return res.status(code).json({ message });
  } catch (error) {
    return res.status(500).json({ message: 'Error interno en el servidor' });
  }
};
const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const { code, message } = await cartService.remove(id);
    return res.status(code).json({ message });
  } catch (error) {
    return res.status(500).json({ message: 'Error interno en el servidor' });
  }
};

export default { getAll, getByUser, create, remove };
