import {Request, Response} from 'express';
import pool from '../config/db';

class UserController {
    async getUser(req: Request, res: Response) {
        try {

            const [user] = await pool.query("SELECT * FROM users WHERE id = ?", [
                req.params.id
            ]);

            if(!user || (Array.isArray(user) && user.length === 0)) {
                return res.status(404).json({ error: 'User not found' });
            }

            res.json(user);

        } catch(err) {
            console.error(err);
            res.status(500).json({ error: 'Server error' });
        }
    }

    async getAllUsers(req: Request, res: Response) {
        try {

            const [users] = await pool.query("SELECT * FROM users");

            if(!users || (Array.isArray(users) && users.length === 0)) {
                return res.status(404).json({ error: 'No users found' });
            }

            res.json(users);

        } catch(err) {
            console.error(err);
            res.status(500).json({ error: 'Server error' });
        }
    } 
}

export default new UserController();