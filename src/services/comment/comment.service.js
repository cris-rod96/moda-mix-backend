import { Comment, Product, User } from '../../lib/conn.js';

const getAll = async () => {
  const comments = await Comment.findAll({
    where: {
      status: true,
    },
  });
  return { code: 200, comments };
};

const getByProduct = async (ProductId) => {
  const product = await Product.findOne({
    where: {
      id: ProductId,
      status: true,
    },
  });
  if (!product) return { code: 400, message: 'Producto no encontrado' };
  const comments = await Product.findAll({
    ProductId,
  });
  return { code: 200, comments };
};

const getByUser = async (UserId) => {
  const user = await User.findOne({
    where: {
      id: UserId,
      status: true,
    },
  });
  if (!user) return { code: 400, message: 'Usuario no encontrado' };
  const comments = await Product.findAll({
    UserId,
  });
  return { code: 200, comments };
};

const create = async (data) => {
  const existUser = await User.findByPk(data.UserId);
  const existProduct = await Product.findByPk(data.ProductId);
  if (!existUser || !existProduct)
    return {
      code: 400,
      message: 'Error al crear el comentario. Usuario o producto inválido.',
    };

  const comment = await Comment.create(data);
  return comment
    ? { code: 201, message: 'Comentario creado con éxito' }
    : {
        code: 400,
        message: 'No se pudo crear el comentario. Intente de nuevo.',
      };
};

const remove = async (id) => {
  const comment = await Comment.findOne({
    where: {
      id,
      status: true,
    },
  });

  if (!comment) return { code: 400, message: 'Comentario no encontrado' };
  comment.status = false;
  await comment.save();
  return { code: 200, message: 'Comentario eliminado' };
};

const update = async (content, id) => {
  const comment = await Comment.findOne({
    where: {
      id,
      status: true,
    },
  });

  if (!comment) return { code: 400, message: 'Comentario no encontrado' };
  comment.content = content;
  await comment.save();
  return { code: 200, message: 'Comentario actualizado con éxito' };
};

export default { getAll, getByProduct, getByUser, create, remove, update };
