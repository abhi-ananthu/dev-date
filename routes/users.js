import { Router } from 'express';
import { viewUserDetails } from '../controller/users/middleware';

const router = Router();

router.post('/create-user', (req, res) => {
  res.send('User created');
});

router.get('/view-user/:id', viewUserDetails);

router.post('/update-user/:id', (req, res) => {
  res.send(`User details updated for ID: ${req.params.id}`);
});

router.get('/delete-user/:id', (req, res) => {
  res.send(`User deleted with ID: ${req.params.id}`);
});

router.get('/block-user/:id', (req, res) => {
  res.send(`User blocked with ID: ${req.params.id}`);
});

router.get('/unblock-user/:id', (req, res) => {
  res.send(`User unblocked with ID: ${req.params.id}`);
});

router.get('/get-matched-user/:id', (req, res) => {});
