'use strict';
import Sequelize from 'sequelize';
import winston from '../config/winston';

class Categories extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          allowNull: false,
          primaryKey: true,
          type: DataTypes.STRING
        },
        name: DataTypes.STRING,
        decription: DataTypes.STRING,
        preview: DataTypes.STRING,
        isChild: DataTypes.BOOLEAN,
        rootId: DataTypes.STRING,
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
        attributes: ['id', 'name', 'description', 'preview', 'rootId', 'isChild'],
        order: [['createdAt', 'DESC']]
      });
    } catch (ex) {
      winston.error(ex)
      // console.log('errr', er)
    }
  }

}

export default Categories;
