import { Op } from 'sequelize';
import { Supplier } from '../../lib/conn.js';

const getAll = async () => {
  const suppliers = await Supplier.findAll({
    where: {
      status: true,
    },
  });
  return suppliers;
};

const create = async (data) => {
  const [supplier, created] = await Supplier.findOrCreate({
    where: {
      [Op.or]: [
        { name: data.name },
        { email: data.email },
        { phone: data.phone },
      ],
    },
    defaults: { ...data },
  });
  return { supplier, created };
};

const update = async (id, data) => {
  const supplier = await Supplier.findOne({
    where: {
      id,
      status: true,
    },
  });
  if (!supplier) return { code: 400, message: 'No existe el proveedor.' };
  const conflict = await Supplier.findOne({
    where: {
      [Op.or]: [
        { name: data.name },
        { email: data.email },
        { phone: data.phone },
      ],
      id: { [Op.ne]: id }, // Excluir el registro actual por ID
    },
  });
  if (conflict)
    return {
      code: 400,
      message: 'Ya existe otro proveedor con estas credenciales',
    };

  const [updated] = await Supplier.update(data, { where: { id } });
  return updated
    ? { code: 200, message: 'Proveedor actualizado' }
    : { code: 400, message: 'Error al actualizar' };
};

const remove = async (id) => {
  const supplier = await Supplier.findOne({
    where: {
      id,
      status: true,
    },
  });
  if (!supplier) return { code: 400, message: 'El proveedor no existe' };
  supplier.status = false;
  await supplier.save();
  return { code: 200, message: 'Proveedor eliminado con éxito' };
};

export default { create, getAll, remove, update };
