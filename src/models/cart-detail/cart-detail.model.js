import { DataTypes } from 'sequelize';

const CartDetailModel = (conn) => {
  conn.define(
    'CartDetail',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUID,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      subTotal: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },

      CartId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Carts',
          key: 'id',
        },
      },
    },
    { timestamps: false }
  );
};

export default CartDetailModel;
