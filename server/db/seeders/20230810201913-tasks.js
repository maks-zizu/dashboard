'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Tasks',
      [
        {
          title: 'kill bil',
          description: 'kek',
          status: '0',
          deadline: 10,
          user_id: 2,
          project_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'pump',
          description: 'kek',
          status: '0',
          deadline: 5,
          user_id: 3,
          project_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'nan',
          description: 'kek',
          status: '1',
          deadline: 10,
          user_id: 1,
          project_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'nan',
          description: 'kek',
          status: '2',
          deadline: 10,
          user_id: 3,
          project_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tasks', null, {});
  },
};
