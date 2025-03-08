import {Request, Response} from 'express';
import pool from '../config/db';

class UserController {
    async getUser(req: Request, res: Response) {
        const {id} = req.params;

        try {

            const [user] = await pool.query("SELECT * FROM users WHERE id = ?", [
                id
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

    // ? Only adds a Status = 'D' in table users, so user can reinstate
    async deleteUser(req: Request, res: Response) {
        const {id} = req.params;

        if(!id) return res.status(400).json({ error: 'Id not given' });

        try {

            const [existingUser] = await pool.query("SELECT id FROM users WHERE id = ?", [id]);

            if(!Array.isArray(existingUser) || existingUser.length === 0) {
                return res.status(404).json({ message: "User not found" });
            }

            const [result] = await pool.query("UPDATE users SET Status = 'D' WHERE id = ?", [id]);

            if((result as any).affectedRows === 0) {
                return res.status(400).json({ error: 'Failed to delete user' });
            }

            res.status(200).json({ message: "Successfully deleted user" });

        } catch(err) {
            console.error(err);
            res.status(500).json({ message: 'Server error' });
        }
    }

    // ? Only changes Status = '' in table users so it's reinstated
    async reinstateUser(req: Request, res: Response) {
        const {id} = req.params;

        if(!id) return res.status(400).json({ message: "Id not given" });

        try {

            const [existingUser] = await pool.query("SELECT id FROM users WHERE id = ?", [id]);

            if(!Array.isArray(existingUser) || existingUser.length === 0) {
                return res.status(404).json({ message: "User not found" });
            }

            const [result] = await pool.query("UPDATE users SET Status = '' WHERE i = ?", [id]);

            if((result as any).affectedRows === 0) {
                return res.status(400).json({ message: "Failed to reinstate user" });
            }

            res.status(200).json({ message: 'Successfully reinstated user' });

        } catch(err) {
            console.error(err);
            res.status(500).json({ message: "Server error" });
        }
    }

    // ? Completely delete user from the database- not able to reinstate
    async completeDeleteUser(req: Request, res: Response) {
        const {id} = req.params;
        
        if(!id) return res.status(400).json({ message: "Id not given" });

        try {

            const [existingUser] = await pool.query("SELECT id FROM users WHERE id = ?", [id]);

            if(!Array.isArray(existingUser) || existingUser.length === 0) {
                return res.status(404).json({ message: "User not found" });
            }

            const [result] = await pool.query("DELETE FROM users WHERE id = ?", [id]);

            if((result as any).affectedRows === 0) {
                return res.status(400).json({ message: "Failed to completely delete user" });
            }

            res.status(200).json({ message: "Successfully completely deleted user" });

        } catch(err) {
            console.error(err);
            res.status(500).json({ message: 'Server error' });
        }
    }
}

export default new UserController();