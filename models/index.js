// write like this guideline https://dev.to/hugo__df/using-es6-classes-for-sequelize-4-models-17ga

const Sequelize = require('sequelize');
const config = require('../config/config.json');
const dbConfig = config[process.env.NODE_ENV];
const sequelize = new Sequelize(
    dbConfig.database, 
    dbConfig.username, 
    dbConfig.password, 
    { 
        dialect: dbConfig.dialect, 
        host: dbConfig.host, 
        port: dbConfig.port 
    });

import Users from './users';
import Categories from './category';
import Products from './product';

const models = {
  Users: Users.init(sequelize, Sequelize),
  Categories: Categories.init(sequelize, Sequelize),
  Products: Products.init(sequelize, Sequelize)
};

Object.values(models)
  .filter(model => typeof model.associate === "function")
  .forEach(model => model.associate(models));

const db = {
  ...models,
  sequelize
};

export default db;
