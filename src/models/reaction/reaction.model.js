import { DataTypes } from 'sequelize';
import { REACTIONS } from '../../data/enums.js';

const ReactionModel = (conn) => {
  conn.define(
    'Reaction',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      reaction: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: REACTIONS,
      },

      UserId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Users',
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
    },
    { timestamps: false }
  );
};

export default ReactionModel;
