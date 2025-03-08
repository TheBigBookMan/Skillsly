import {Request, Response} from 'express';
import pool from '../config/db';

class UserController {
    async getUser(req: Request, res: Response) {
        try {

            const [rows] = await pool.query("SELECT * FROM users WHERE id = ?", [
                req.params.id
            ]);

            if(!rows || (Array.isArray(rows) && rows.length === 0)) {
                return res.status(404).json({ error: 'User not found' });
            }

            res.json(rows);

        } catch(err) {
            console.error(err);
            res.status(500).json({ error: 'Server error' });
        }
    }

}

export default new UserController();