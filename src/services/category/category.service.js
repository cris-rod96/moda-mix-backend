import { Op } from 'sequelize';
import { Category } from '../../lib/conn.js';

const getAll = async () => {
  const categories = await Category.findAll({
    where: {
      status: true,
    },
  });
  return categories;
};

const create = async (name) => {
  const [category, created] = await Category.findOrCreate({
    where: { name },
    defaults: { name },
  });
  return { category, created };
};

const remove = async (id) => {
  const category = await Category.findOne({
    where: {
      id,
      status: true,
    },
  });
  if (!category) return { code: 400, message: 'La categoría no existe' };
  category.status = false;
  await category.save();
  return { code: 200, message: 'Categoría eliminada con éxito' };
};

const update = async (id, name) => {
  const category = await Category.findOne({
    where: {
      id,
      status: true,
    },
  });
  if (!category) return { code: 400, message: 'Categoría no válida.' };

  const otherCategoryExist = await Category.findOne({
    where: {
      name,
      id: {
        [Op.not]: id,
      },
    },
  });

  if (otherCategoryExist)
    return { code: 400, message: 'Nombre de categoría no disponible' };

  category.name = name;
  await category.save();
  return { code: 200, message: 'Categoría actualizada con éxito' };
};

export default { getAll, create, remove, update };
