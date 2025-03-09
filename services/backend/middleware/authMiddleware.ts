import axios from 'axios';
import { Request, Response, NextFunction } from 'express';

export const verifyJwtWithAuthService = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Unauthorised: No token provided" });
    }

    try {

        const response = await axios.get('/protected', {
            headers: {Authorization: authHeader}
        });

        req.user = response.data.user;
        next();

    } catch(err) {
        console.error(err);
        return res.status(401).json({ error: 'Unauthorised: Invalid token' });
    }
}