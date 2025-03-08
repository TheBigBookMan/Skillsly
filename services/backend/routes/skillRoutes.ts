import express from 'express';
import SkillController from '../controllers/SkillController';

const router = express.Router();

// ? /
router.get('/', SkillController.getAllSkills);
router.post('/', SkillController.createSkill);

// ? /:id
router.get('/:id', SkillController.getSkill);
router.put('/:id', SkillController.updateSkill);
// * Just adds Status = 'D'
router.delete('/:id', SkillController.deleteSkill);

export default router;