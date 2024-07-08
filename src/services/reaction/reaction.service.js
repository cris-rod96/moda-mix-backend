import { Reaction } from '../../lib/conn.js';

const getByProduct = async (ProductId) => {
  const reactions = await Reaction.findAll({
    where: {
      ProductId,
    },
  });
  return { code: 200, reactions };
};

const getByUser = async (UserId) => {
  const reactions = await Reaction.findAll({
    where: {
      UserId,
    },
  });
  return { code: 200, reactions };
};

const create = async (data) => {
  const reaction = await Reaction.create({ ...data });
  return reaction
    ? { code: 201, message: 'Reacción guardada con éxito' }
    : { code: 400, message: 'Error. No se pudo guardar la reacción' };
};

const remove = async (id) => {
  const deleted = await Reaction.destroy({
    where: {
      id,
    },
  });
  return deleted > 0
    ? { code: 200, message: 'Reacción eliminada' }
    : { code: 400, message: 'No se pudo eliminar la reacción' };
};

const updateReaction = async (id, data) => {
  const reaction = await Reaction.findOne({
    where: {
      id,
    },
  });
  if (!reaction) return { code: 400, message: 'Error, la reacción no existe' };
  reaction.reaction = data;
  await reaction.save();
  return { code: 200, message: 'Reacción actualizada con éxito' };
};

export default { getByUser, getByProduct, create, remove, updateReaction };
