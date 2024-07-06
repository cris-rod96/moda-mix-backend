import { PREFIXES } from '../../data/prefixes.js';
import { Income, Supplier } from '../../lib/conn.js';
import { utlrds } from '../../utils/index.utils.js';

const getAll = async () => {
  const incomes = await Income.findAll({
    where: {
      status: true,
    },
  });
  return { code: 200, incomes };
};
const create = async (data) => {
  const existSupplier = await Supplier.findByPk(data.SupplierId);
  if (!existSupplier)
    return { code: 400, message: 'El proveedor proporcionado no es válido.' };
  const code = utlrds.generateCode(PREFIXES.INCOMES);
  const income = await Income.create({
    ...data,
    code,
  });

  return income
    ? { code: 201, message: 'Producto creado con éxito', income }
    : {
        code: 400,
        message:
          'Error al crear el ingreso. Intente de nuevo o contacte con el administrador',
      };
};
const remove = async (id) => {
  const income = await Income.findOne({
    where: {
      id,
      status: true,
    },
  });
  if (!income) return { code: 400, message: 'No se encontró el ingreso.' };
  income.status = false;
  await income.save();
  return { code: 200, message: 'Se eliminó el ingreso con éxito' };
};
const update = async () => {
  const income = await Income.findOne({
    where: {
      id,
      status: true,
    },
  });
  if (!income) return { code: 400, message: 'No existe el ingreso.' };
  const conflict = await Product.findOne({
    where: {
      code: data.code,
      id: { [Op.ne]: id }, // Excluir el registro actual por ID
    },
  });
  if (conflict)
    return {
      code: 400,
      message: 'Ya existe otro ingreso con estos datos',
    };

  const [updated] = await Income.update(data, { where: { id } });
  return updated
    ? { code: 200, message: 'Ingreso actualizado' }
    : { code: 400, message: 'Error al actualizar el ingreso' };
};

export default { getAll, create, update, remove };
