import { DataTypes } from 'sequelize';

const IncomeModel = (conn) => {
  conn.define(
    'Income',
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
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          min: 1.0,
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

      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    { timestamps: false }
  );
};

export default IncomeModel;
