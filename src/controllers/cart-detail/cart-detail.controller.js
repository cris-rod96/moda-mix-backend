import { cartDetailService } from '../../services/index.services.js';

const getItemsByCart = async (req, res) => {
  try {
    const { id } = req.params;
    const { code, cartItems } = await cartDetailService.getItemsByCart(id);
    return req.status(code).json({ cartItems });
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor',
    });
  }
};
const addItems = async (req, res) => {
  try {
    const { CartId, items } = req.body;
    const { code, message } = await cartDetailService.addItems(CartId, items);
    return res.status(code).json({ message });
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor',
    });
  }
};

const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { code, message } = await cartDetailService.deleteItem(id);
    return res.status(code).json({ message });
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor',
    });
  }
};

export default { addItems, deleteItem, getItemsByCart };
