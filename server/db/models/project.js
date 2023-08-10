const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    static associate({ UserProject, Task, User }) {
      this.hasMany(UserProject, { foreignKey: 'project_id' });
      this.hasMany(Task, { foreignKey: 'project_id' });
      this.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  Project.init(
    {
      name_project: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      admin_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'User', key: 'id' },
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'Project',
    }
  );
  return Project;
};
