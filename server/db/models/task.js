const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate({ Help, Project, User }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(Project, { foreignKey: 'project_id' });
      this.hasMany(Help, { foreignKey: 'task_id' });
    }
  }
  Task.init(
    {
      title: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      status: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: '0',
      },
      deadline: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'User', key: 'id' },
        onDelete: 'CASCADE',
      },
      project_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'Project', key: 'id' },
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'Task',
    }
  );
  return Task;
};
