import { cartDetailService } from '../../services/index.services.js';

const getByCart = async (req, res) => {
  try {
    const { id } = req.params;
    const { code, cartItems } = await cartDetailService.getByCart(id);
    return req.status(code).json({ cartItems });
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor',
    });
  }
};
const create = async (req, res) => {
  try {
    const { CartId, items } = req.body;
    const { code, message } = await cartDetailService.create(CartId, items);
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
    const { code, message } = await cartDetailService.create(id);
    return res.status(code).json({ message });
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor',
    });
  }
};

export default { create, remove, getByCart };
