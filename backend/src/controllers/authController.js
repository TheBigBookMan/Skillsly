const {registerUser, loginUser} = require('../services/authService');

const signup = async (req, res) => {
    const {email, password} = req.body;

    try {
        const response = await registerUser({email, password});
        res.status(201).json(response.data);
    } catch(err) {
        res.status(err.response?.status || 500).json({message: err.message});
    }
}