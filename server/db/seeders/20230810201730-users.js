'use strict';
/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Tima',
          email: 'a@a',
          password: await bcrypt.hash('1234', 5),
          photo:
            'https://tochka.by/upload/resize_cache/iblock/af2/768_512_1/ozkpyo0xbx7v2xuf48m1gfh0bh0pbgcc.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Maks',
          email: 'm@m',
          password: await bcrypt.hash('1234', 5),
          photo:
            'https://dostavka-tsvety.ru/wp-content/uploads/2019/12/13b832a2f9fcffd057117c09dff04f8d.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Lil',
          email: 'l@l',
          password: await bcrypt.hash('1234', 5),
          photo:
          'https://greenisland.ru/upload/iblock/1e1/1e1858e59d6b3f9139e9e575b69a20cd.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
