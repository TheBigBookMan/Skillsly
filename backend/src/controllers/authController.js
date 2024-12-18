const {registerUser, loginUser} = require('../services/authService');

class AuthController {
    
    async signup (req, res) {
        const {email, password} = req.body;
    
        try {
            const response = await registerUser({email, password});
            res.status(201).json(response.data);
        } catch(err) {
            res.status(err.response?.status || 500).json({message: err.message});
        }
    }
    
    async login (req, res) {
        const {email, password} = req.body;
    
        try {
            const response = await loginUser({email, password});
            res.status(200).json(response.data);
        } catch(err) {
            res,status(err.response?.status || 500).json({message: err.message});
        }
    }
}

module.exports = new AuthController();