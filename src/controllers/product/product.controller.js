import { productService } from '../../services/index.services.js';

const getAll = async (req, res) => {
  try {
    const products = await productService.getAll();
    return res.status(200).json({ products });
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor',
    });
  }
};
const create = async (req, res) => {
  try {
    const data = req.body;
    const { code, message } = await productService.create(data);
    return res.status(code).json({ message });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Error interno en el servidor',
    });
  }
};
const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const { code, message } = await productService.remove(id);
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
    const { code, message } = await productService.update(id, data);
    return res.status(code).json({ message });
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor',
    });
  }
};

export default { getAll, create, remove, update };
