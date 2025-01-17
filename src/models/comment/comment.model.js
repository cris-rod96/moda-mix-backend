import { DataTypes } from 'sequelize';

const CommentModel = (conn) => {
  conn.define(
    'Comment',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      date: {
        type: DataTypes.STRING,
        allowNull: false,
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

      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    { timestamps: false }
  );
};

export default CommentModel;
