import { DataTypes } from 'sequelize';

const IncomeDetailModel = (conn) => {
  conn.define(
    'IncomeDetail',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      IncomeId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Incomes',
          key: 'id',
        },
      },

      ProductId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Products',
          key: 'id',
        },
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
        },
      },

      unitPrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },

      subtotal: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },

      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    { timestamps: false }
  );
};

export default IncomeDetailModel;
