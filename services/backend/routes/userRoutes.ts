import express from 'express';
import UserController from '../controllers/UserController';

const router = express.Router();

// ? /
router.get('/', UserController.getAllUsers);
router.post('/', UserController.createUser);

// ? /:id
router.get('/:id', UserController.getUser);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

export default router;