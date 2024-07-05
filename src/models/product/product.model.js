import { DataTypes } from 'sequelize';
import { BRANDS, COLORS } from '../../data/enums.js';

const ProductModel = (conn) => {
  conn.define(
    'Product',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
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
      colors: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
        validate: {
          isValidColors: (values) => {
            if (!Array.isArray(values))
              throw new Error('Formato de colores incorrecto.');

            const foundColores = values.every((value) =>
              COLORS.includes(value)
            );
            if (!foundColores) throw new Error('Hay colores no válidos');
          },
        },
      },
      images: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },

      CategoryId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Categories',
          key: 'id',
        },
      },
      SupplierId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Suppliers',
          key: 'id',
        },
      },
    },
    {
      timestamps: false,
    }
  );
};

export default ProductModel;
