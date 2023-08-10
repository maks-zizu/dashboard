const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ UserProject, Project, Task, Comment }) {
      this.hasMany(UserProject, { foreignKey: 'user_id' });
      this.hasMany(Project, { foreignKey: 'user_id' });
      this.hasMany(Task, { foreignKey: 'user_id' });
      this.hasMany(Comment, { foreignKey: 'user_id' });
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      photo: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
