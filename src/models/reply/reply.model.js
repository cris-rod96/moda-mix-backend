import { DataTypes } from 'sequelize';

const ReplyModel = (conn) => {
  conn.define(
    'Reply',
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
        type: DataTypes.DATE,
        defaultValue: Date.now(),
      },

      CommentId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Comments',
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

      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    { timestamps: false }
  );
};

export default ReplyModel;
