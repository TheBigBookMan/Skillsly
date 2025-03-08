import express from 'express';
import userRoutes from './userRoutes';
import skillRoutes from './skillRoutes';

const router = express.Router();

router.use("/user", userRoutes);
router.use("/skills", skillRoutes);

export default router;