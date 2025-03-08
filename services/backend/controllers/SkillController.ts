import { Request, Response } from "express";
import pool from "../config/db";

class SkillController {
    async getSkill(req: Request, res: Response) {
        try {

            const [skill] = await pool.query("SELECT * FROM skills WHERE id = ?", [
                req.params.id
            ]);

            if(!skill || (Array.isArray(skill) && skill.length === 0)) {
                return res.status(404).json({ error: 'Skill not found' });
            }

            res.json(skill);

        } catch(err) {
            console.error(err);
            res.status(500).json({ error: 'Server error' });
        }
    }

    async getAllSkills(req: Request, res: Response) {
        try {

            const [skills] = await pool.query("SELECT * FROM skills");

            if(!skills || (Array.isArray(skills) && skills.length === 0)) {
                return res.status(404).json({ error: 'No skills found' });
            }

            res.json(skills)

        } catch(err) {
            console.error(err);
            res.status(500).json({ error: 'Server error' });
        }
    }
}

export default new SkillController();