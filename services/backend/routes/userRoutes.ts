import express from 'express';
import UserController from '../controllers/UserController';

const router = express.Router();

// ? /
router.get('/', UserController.getAllUsers);
router.post('/', UserController.createUser);

// ? /:id
router.get('/:id', UserController.getUser);
router.put('/:id', UserController.updateUser);
// * Adds a status D to the user in user table- can reinstate
router.delete('/:id', UserController.deleteUser);

// ? /userStatus/:id
router.put('/userStatus/:id', UserController.reinstateUser);
// * Completely remove from database
router.delete('/userStatus/:id', UserController.completeDeleteUser);

export default router;