import { Sequelize, DataTypes } from 'sequelize';
import { BRANDS } from '../../data/enums.js';

const ProductModel = () => {
  new Sequelize().define('Product', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: true,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: 1.0,
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    brand: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: BRANDS,
    },
    sizes: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    colors: {},
  });
};

export default ProductModel;
