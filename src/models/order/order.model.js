import { DataTypes } from 'sequelize';
import { ORDER_STATUS } from '../../data/enums.js';

const OrderModel = (conn) => {
  conn.define(
    'Order',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      code: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },

      amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },

      date: {
        type: DataTypes.DATE,
        defaultValue: Date.now(),
      },

      statusOrder: {
        type: DataTypes.ENUM,
        values: ORDER_STATUS,
        defaultValue: 'Pendiente',
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
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    { timestamps: false }
  );
};

export default OrderModel;
