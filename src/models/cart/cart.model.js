import { DataTypes } from 'sequelize';

const CartModel = (conn) => {
  conn.define(
    'Cart',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      UserId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
      },

      status: {
        type: DataTypes.UUID,
        defaultValue: true,
      },
    },
    {
      timestamps: false,
    }
  );
};

export default CartModel;
