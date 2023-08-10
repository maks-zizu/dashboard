const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate({ Help, User }) {
      this.belongsTo(Help, { foreignKey: 'help_id' });
      this.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  Comment.init(
    {
      message: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      help_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'Help', key: 'id' },
        onDelete: 'CASCADE',
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'User', key: 'id' },
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'Comment',
    }
  );
  return Comment;
};
