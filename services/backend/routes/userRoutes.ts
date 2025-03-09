import express from 'express';
import UserController from '../controllers/UserController';
import { verifyJwtWithAuthService } from '../middleware/authMiddleware';

const router = express.Router();

// * Public routes- no auth needed
// TODO make a route to get a user for someone who isnt logged in to be able to see some info for a user

// * Protected routes- auth needed
// ? /
router.get('/', verifyJwtWithAuthService, UserController.getAllUsers);
router.post('/', verifyJwtWithAuthService, UserController.createUser);

// ? /:id
router.get('/:id', verifyJwtWithAuthService, UserController.getUser);
router.put('/:id', verifyJwtWithAuthService, UserController.updateUser);
// * Adds a status D to the user in user table- can reinstate
router.delete('/:id', verifyJwtWithAuthService, UserController.deleteUser);

// ? /userStatus/:id
router.put('/userStatus/:id', verifyJwtWithAuthService, UserController.reinstateUser);
// * Completely remove from database
router.delete('/userStatus/:id', verifyJwtWithAuthService, UserController.completeDeleteUser);

export default router;