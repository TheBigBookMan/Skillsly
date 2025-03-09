import express from 'express';
import SkillController from '../controllers/SkillController';
import { verifyJwtWithAuthService } from '../middleware/authMiddleware';

const router = express.Router();

// * Public routes- no auth needed
// TODO make a route to get a skill for someone who isnt logged in to be able to see some info for a skill

// * Protected routes- auth needed
// ? /
router.get('/', verifyJwtWithAuthService, SkillController.getAllSkills);
router.post('/', verifyJwtWithAuthService, SkillController.createSkill);

// ? /:id
router.get('/:id', verifyJwtWithAuthService, SkillController.getSkill);
router.put('/:id', verifyJwtWithAuthService, SkillController.updateSkill);
// * Just adds Status = 'D'
router.delete('/:id', verifyJwtWithAuthService, SkillController.deleteSkill);

export default router;