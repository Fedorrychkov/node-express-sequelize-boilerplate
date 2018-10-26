'use strict';

const uuidv4 = require('uuid/v4');
const moment = require('moment');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   const currentDateTime = moment().format();
    return queryInterface.bulkInsert('Users', [{
      id: uuidv4(),
      firstName: 'John',
      lastName: 'Doe',
      email: 'demo@demo.com',
      password: '1111',
      userGroup: 'superadmin',
      phone: '89673632100',
      language: 'ru-Ru',
      createdAt: currentDateTime,
      updatedAt: currentDateTime
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
