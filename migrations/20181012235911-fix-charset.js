'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(
      `ALTER DATABASE ${queryInterface.sequelize.config.database}
      CHARACTER SET utf8 COLLATE utf8_general_ci;`
      )
  },
  down: (queryInterface, Sequelize) => { }
}
