import { incomeDetailService } from '../../services/index.services.js';

const getAll = async (req, res) => {
  try {
    const { code, incomeDetails } = await incomeDetailService.getAll();
    return res.status(code).json({ incomeDetails });
  } catch (error) {
    return res.status(500).json({ message: 'Error interno en el servidor' });
  }
};
const getByIncome = async (req, res) => {
  try {
    const { id } = req.params;
    const { code, incomeDetails } = await incomeDetailService.getByIncome(id);
    return res.status(code).json({ incomeDetails });
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor',
    });
  }
};
const create = async (req, res) => {
  try {
    const data = req.body;
    const { code, message } = await incomeDetailService.create(data);
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
    const { code, message } = await incomeDetailService.remove(id);
    return res.status(code).json({ message });
  } catch (error) {}
};

export default { getAll, getByIncome, create, remove };
