import { Income, IncomeDetail } from '../../lib/conn.js';

const getAll = async () => {
  const incomeDetails = await IncomeDetail.findAll({
    where: {
      status: true,
    },
  });
  return { code: 200, incomeDetails };
};

const getByIncome = async (id) => {
  const incomeDetails = await IncomeDetail.findAll({
    where: {
      status: true,
      IncomeId: id,
    },
  });
  return { code: 200, incomeDetails };
};
const create = async (data) => {
  const existeIncome = await Income.findOne({
    where: {
      status: true,
      IncomeId: data.IncomeId,
    },
  });
  if (!existeIncome)
    return { code: 400, message: 'El ingreso proporcionado no es válido.' };
  const incomeDetails = await IncomeDetail.bulkCreate(data);

  return incomeDetails.length > 0
    ? { code: 201, message: 'Detalle de ingreso creado con éxito' }
    : {
        code: 400,
        message:
          'Error al crear el detalle de ingreso. Intente de nuevo o contacte con el administrador',
      };
};
const remove = async (id) => {
  const incomeDetail = await IncomeDetail.findOne({
    where: {
      id,
      status: true,
    },
  });
  if (!incomeDetail)
    return { code: 400, message: 'Detalle de ingreso no encontrado' };

  incomeDetail.status = false;
  await incomeDetail.save();
  return { code: 200, message: 'Detalle de ingreso eliminado con éxito.' };
};

export default { getAll, getByIncome, create, remove };
