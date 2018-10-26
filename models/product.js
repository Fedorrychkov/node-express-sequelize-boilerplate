'use strict';
import Sequelize from 'sequelize';
import winston from '../config/winston';

class Products extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          allowNull: false,
          primaryKey: true,
          type: DataTypes.STRING
        },
        title: {
          type: Sequelize.STRING
        },
        description: {
          type: Sequelize.STRING
        },
        pictures: {
          type: Sequelize.STRING
        },
        preview: {
          type: Sequelize.STRING
        },
        rating: {
          type: Sequelize.FLOAT
        },
        avalibleCount: {
          type: Sequelize.INTEGER
        },
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
        order: [['createdAt', 'DESC']]
      });
    } catch (ex) {
      winston.error(ex)
      // console.log('errr', er)
    }
  }

}

export default Products;
