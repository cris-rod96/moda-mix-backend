import { Product } from '../../lib/conn.js';
import { utlCloudinary } from '../../utils/index.utils.js';

const getAll = async () => {
  const products = await Product.findAll({
    where: {
      status: true,
    },
  });
  return products;
};
const create = async (data) => {
  const productExist = await Product.findOne({
    where: {
      name: data.name,
    },
  });
  if (productExist)
    return {
      code: 400,
      message: 'Error al registrar el producto. Información duplicada',
    };

  const image = await utlCloudinary.uploadImage(
    'products',
    data.name.toLowerCase(),
    'PRODUCTS',
    data.image
  );

  const product = await Product.create({
    ...data,
    images: [image],
  });
  return product
    ? { code: 201, message: 'Producto creado con éxito' }
    : {
        code: 400,
        message:
          'Error al crear el producto. Intente de nuevo o contacte con el administrador',
      };
};
const remove = async (id) => {
  const product = await Product.findOne({
    where: {
      id,
      status: true,
    },
  });

  if (!product) return { code: 400, message: 'Producto no encontrado' };
  product.status = false;
  await product.save();
  return { code: 200, message: 'Producto eliminado con éxito' };
};

const update = async (id, data) => {
  const product = await Product.findOne({
    where: {
      id,
      status: true,
    },
  });
  if (!product) return { code: 400, message: 'No existe el producto.' };
  const conflict = await Product.findOne({
    where: {
      name: data.name,
      id: { [Op.ne]: id }, // Excluir el registro actual por ID
    },
  });
  if (conflict)
    return {
      code: 400,
      message: 'Ya existe otro producto con estas credenciales',
    };

  const [updated] = await Product.update(data, { where: { id } });
  return updated
    ? { code: 200, message: 'Producto actualizado' }
    : { code: 400, message: 'Error al actualizar el product' };
};

export default { getAll, create, remove, update };
