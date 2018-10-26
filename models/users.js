'use strict';
import Sequelize from 'sequelize';
import winston from '../config/winston';

class Users extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          allowNull: false,
          primaryKey: true,
          type: DataTypes.STRING
        },
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: {
          allowNull: false,
          type: Sequelize.STRING
        },
        password: {
          allowNull: false,
          type: Sequelize.STRING
        },
        birthDay: {
          type: Sequelize.STRING
        },
        userGroup: {
          allowNull: false,
          type: Sequelize.STRING
        },
        phone: {
          allowNull: false,
          type: Sequelize.STRING
        },
        language: {
          allowNull: false,
          type: Sequelize.STRING
        }
      },
      { sequelize }
    );
  }

  static associate(models) {
    // associations can be defined here
  }

  static async getAll() {
    try {
      return await this.findAll({
        attributes: ['id', 'firstName', 'lastName', 'email', 'birthDay', 'userGroup', 'phone', 'language', 'createdAt', 'updatedAt'],
        order: [['createdAt', 'DESC']]
      });
    } catch (ex) {
      winston.error(ex)
      // console.log('errr', er)
    }
  }

}

export default Users;