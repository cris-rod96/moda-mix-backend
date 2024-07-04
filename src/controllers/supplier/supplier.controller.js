import { Supplier } from '../../lib/conn.js';
import { supplierService } from '../../services/index.services.js';

const getAll = async (req, res) => {
  try {
    const suppliers = await supplierService.getAll();
    return res.status(200).json({ suppliers });
  } catch (error) {
    return res.status(500).json({ message: 'Error interno en el servidor.' });
  }
};
const create = async (req, res) => {
  try {
    const data = req.body;
    const { supplier, created } = await supplierService.create(data);
    return created
      ? res.status(201).json({ supplier })
      : res.status(400).json({
          message: 'Error al crear proveedor. Información duplicada.',
        });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Error interno en el servidor.' });
  }
};
const update = async (req, res) => {
  try {
    const data = req.body;
    const { id } = req.params;
    const { code, message } = await supplierService.update(id, data);
    return res.status(code).json({ message });
  } catch (error) {
    return res.status(500).json({ message: 'Error interno en el servidor.' });
  }
};
const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const { code, message } = await supplierService.remove(id);
    return res.status(code).json({ message });
  } catch (error) {
    return res.status(500).json({ message: 'Error interno en el servidor.' });
  }
};

export default { getAll, create, update, remove };
