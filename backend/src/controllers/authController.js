const AuthService = require('../services/authService');

class AuthController {
    
    async signup (req, res) {
        const {email, password} = req.body;
    
        try {
            const response = await AuthService.registerUser(email, password);
            res.status(201).json(response);
        } catch(err) {
            res.status(err.status || 500).json({message: err.message});
        }
    }
    
    async login (req, res) {
        const {email, password} = req.body;
    
        try {
            const response = await AuthService.loginUser(email, password);
            res.status(200).json(response);
        } catch(err) {
            res,status(err.status || 500).json({message: err.message});
        }
    }
}

module.exports = new AuthController();