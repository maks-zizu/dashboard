'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Tasks',
      [
        {
          title: 'Task-title-1',
          description: 'description-1',
          status: '0',
          deadline: 10,
          user_id: 2,
          project_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Task-title-2',
          description: 'description-2',
          status: '0',
          deadline: 5,
          user_id: 3,
          project_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Task-title-3',
          description: 'description-3',
          status: '1',
          deadline: 7,
          user_id: 1,
          project_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Task-title-4',
          description: 'description-4',
          status: '2',
          deadline: 6,
          user_id: 1,
          project_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Task-title-5',
          description: 'description-5',
          status: '1',
          deadline: 8,
          user_id: 2,
          project_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Task-title-6',
          description: 'description-6',
          status: '2',
          deadline: 9,
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
