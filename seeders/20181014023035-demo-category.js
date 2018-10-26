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
    return queryInterface.bulkInsert('Categories', [{
      id: uuidv4(),
      name: 'Аппаратура',
      preview: null,
      description: 'Музыкальное оборудование ручной работы от Рычкова Сергея Валентиновича',
      createdAt: currentDateTime,
      updatedAt: currentDateTime
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
