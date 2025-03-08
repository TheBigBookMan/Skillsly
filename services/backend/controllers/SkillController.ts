import { Request, Response } from "express";
import pool from "../config/db";

class SkillController {
    async getSkill(req: Request, res: Response) {
        try {

            const [rows] = await pool.query("SELECT * FROM skills WHERE id = ?", [
                req.params.id
            ]);

            if(!rows || (Array.isArray(rows) && rows.length === 0)) {
                return res.status(404).json({ error: 'Skill not found' });
            }

            res.json(rows);

        } catch(err) {
            console.error(err);
            res.status(500).json({ error: 'Server error' });
        }
    }
}

export default new SkillController();