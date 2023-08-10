const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserProject extends Model {
    static associate({ User, Project }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(Project, { foreignKey: 'project_id' });
    }
  }
  UserProject.init(
    {
      project_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'Project', key: 'id' },
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
      modelName: 'UserProject',
    }
  );
  return UserProject;
};
