import { categoryService } from '../../services/index.services.js';

const getAll = async (req, res) => {
  try {
    const categories = await categoryService.getAll();
    return res.status(200).json({ categories });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Error interno en el servidor',
    });
  }
};

const create = async (req, res) => {
  try {
    const { name } = req.body;
    const { category, created } = await categoryService.create(name);
    return created
      ? res.status(201).json({
          message: 'Categoría creada con éxito',
        })
      : res.status(400).json({
          message: 'Ya existe una categoría con este nombre.',
        });
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor',
    });
  }
};
const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const { code, message } = await categoryService.remove(id);
    return res.status(code).json({ message });
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor',
    });
  }
};
const update = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const { code, message } = await categoryService.update(id, name);
    return res.status(code).json({ message });
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor',
    });
  }
};

export default { create, getAll, remove, update };
