import { Comment, Reply, User } from '../../lib/conn.js';

const getByComment = async (CommentId) => {
  const existComment = await Comment.findByPk(CommentId);
  if (!existComment) return { code: 400, message: 'Comentario no encontrado' };
  const replies = await Reply.findAll({
    where: {
      status: true,
      CommentId,
    },
  });
  return { code: 200, replies };
};

const create = async (data) => {
  const existUser = await User.findByPk(data.UserId);
  const existComment = await Comment.findOne({
    where: {
      status: true,
      id: data.CommentId,
    },
  });
  if (!existComment || !existUser)
    return {
      code: 400,
      message: 'Error al crear. Comentario y/o usuario no válido',
    };

  const reply = await Reply.create(data);
  return reply
    ? { code: 200, message: 'Respuesta registrada con éxito' }
    : {
        code: 400,
        message: 'Error. No se pudo crear la respuesta. Intente de nuevo',
      };
};

const remove = async (id) => {
  const reply = await Reply.findOne({
    where: {
      id,
      status: true,
    },
  });
  if (!reply) return { code: 400, message: 'Respuesta no encontrada' };
  reply.status = false;
  await reply.save();
  return { code: 200, message: 'Respuesta eliminada con éxito.' };
};

const update = async (content, id) => {
  const reply = await Reply.findOne({
    where: {
      id,
      status: true,
    },
  });

  if (!reply) return { code: 400, message: 'Respuesta no encontrada' };
  reply.content = content;
  await reply.save();
  return { code: 200, message: 'Respuesta actualizada con éxito' };
};

export default { getByComment, create, remove, update };
