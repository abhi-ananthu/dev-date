import { Router } from 'express';
import { createUser, viewUserDetails } from '../controller/users/middleware.js';

const UserRouter = Router();

UserRouter.post('/create-user', createUser);

UserRouter.get('/view-user/:id', viewUserDetails);

UserRouter.post('/update-user/:id', (req, res) => {
  res.send(`User details updated for ID: ${req.params.id}`);
});

UserRouter.get('/delete-user/:id', (req, res) => {
  res.send(`User deleted with ID: ${req.params.id}`);
});

UserRouter.get('/block-user/:id', (req, res) => {
  res.send(`User blocked with ID: ${req.params.id}`);
});

UserRouter.get('/unblock-user/:id', (req, res) => {
  res.send(`User unblocked with ID: ${req.params.id}`);
});

UserRouter.get('/get-matched-user/:id', (req, res) => {});

export default UserRouter;
