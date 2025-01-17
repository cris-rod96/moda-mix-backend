import { DataTypes } from 'sequelize';
import { ROLES } from '../../data/enums.js';

const UserModel = (conn) => {
  conn.define(
    'User',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      image: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },

      rol: {
        type: DataTypes.ENUM,
        values: ROLES,
        defaultValue: 'Cliente',
      },
    },
    {
      timestamps: false,
    }
  );
};

export default UserModel;
