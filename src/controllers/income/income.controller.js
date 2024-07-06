import { incomeService } from '../../services/index.services.js';

const getAll = async (req, res) => {
  try {
    const { code, incomes } = await incomeService.getAll();
    return res.status(code).json({ incomes });
  } catch (error) {
    return res.status(500).json({ message: 'Error interno en el servidor' });
  }
};
const create = async (req, res) => {
  try {
    const data = req.body;
    const { code, message } = await incomeService.create(data);
    return res.status(code).json({ message });
  } catch (error) {
    return res.status(500).json({ message: 'Error interno en el servidor' });
  }
};
const update = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const { code, message } = await incomeService.update(id, data);
    return res.status(code).json({ message });
  } catch (error) {
    return res.status(500).json({ message: 'Error interno en el servidor' });
  }
};
const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const { code, message } = await incomeService.remove(id);
    return res.status(code).json({ message });
  } catch (error) {
    return res.status(500).json({ message: 'Error interno en el servidor' });
  }
};

export default { getAll, create, update, remove };
