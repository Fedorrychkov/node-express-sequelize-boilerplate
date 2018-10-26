import express from 'express';
import Router from 'express';
import Users from '../../models/users';

const adminRouterV1 = Router();

adminRouterV1.get('/users', async (req, res, next) => {
    const data = await Users.getAll();
    res.json({status: 200, statusText: 'OK!', data: data});
});
  
export default adminRouterV1;
