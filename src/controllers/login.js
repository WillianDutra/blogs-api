require('dotenv/config');
const { UserService } = require('../services');
const { createToken } = require('../auth/authFunctions');

const validateBody = (email, password) => email && password;

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!validateBody(email, password)) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }

    const user = await UserService.getUserByEmail(email);

    if (!user || user.password !== password) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    const { password: _password, ...userData } = user.dataValues;
    const token = createToken(userData);
    
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};