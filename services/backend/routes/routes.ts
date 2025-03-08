import express from 'express';
import userRoutes from './userRoutes';
import skillsRoutes from './skillsRoutes';

const router = express.Router();

router.use("/user", userRoutes);
router.use("/skills", skillsRoutes);

export default router;