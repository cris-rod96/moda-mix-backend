import { DataTypes } from 'sequelize';
import { PAYMENT_STATUS } from '../../data/enums.js';

const PaymentModel = (conn) => {
  conn.define(
    'Payment',
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

      statusPayment: {
        type: DataTypes.ENUM,
        values: PAYMENT_STATUS,
        defaultValue: 'Pendiente',
      },

      OrderId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Orders',
          key: 'id',
        },
      },
      UserId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      voucher: {
        type: DataTypes.STRING,
      },

      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    { timestamps: false }
  );
};

export default PaymentModel;
