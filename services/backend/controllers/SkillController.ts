import { Request, Response } from "express";
import pool from "../config/db";

class SkillController {
    async getSkill(req: Request, res: Response) {
        const {id} = req.params;
        
        try {

            const [skill] = await pool.query("SELECT * FROM skills WHERE id = ?", [id]);

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

    // ? Adds Status = 'D' to skill
    async deleteSkill(req: Request, res: Response) {
        const {id} = req.params;

        if(!id) return res.status(400).json({ message: "Id not given" });

        try {

            const [existingSkill] = await pool.query("SELECT id FROM skills WHERE id = ?", [id]);

            if(!Array.isArray(existingSkill) || existingSkill.length === 0) {
                return res.status(404).json({ message: "Skill not found" });
            }

            const [result] = await pool.query("UPDATE skills SET Status = 'D' WHERE id = ?", [id]);

            if((result as any).affectedRows === 0) {
                return res.status(400).json({ error: 'Failed to delete skill' });
            }

            res.status(200).json({ message: "Successfully deleted skill" });

        } catch(err) {
            console.error(err);
            res.status(500).json({ message: "Server error" });
        }
    }
}

export default new SkillController();