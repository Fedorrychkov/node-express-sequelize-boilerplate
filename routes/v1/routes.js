import express from 'express';
import Router from 'express';
import Users from '../../models/users';

const routerV1 = Router();

routerV1.get('/users', async (req, res, next) => {
    const data = await Users.getAll();
    res.json({status: 200, statusText: 'OK!', data: data});
});
  
export default routerV1;
