const { UserService } = require('../services');
const { createToken } = require('../auth/authFunctions');

const createUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    
    const userByEmail = await UserService.getUserByEmail(email);
    if (userByEmail) {
      return res.status(409).json({ message: 'User already registered' });
    }

    const userCreated = await UserService.createUser({ displayName, email, password, image });
    if (!userCreated) throw Error;

    const user = await UserService.getUserByEmail(email);
    const { password: _password, ...userData } = user.dataValues;
    const token = createToken(userData);

    return res.status(201).json({ token });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getUsers = async (_req, res) => {
  try {
    const users = await UserService.getUsers();
    if (!users) throw Error;

    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = { createUser, getUsers };