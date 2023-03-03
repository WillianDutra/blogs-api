module.exports = (req, res, next) => {
  const { displayName, password, email } = req.body;
  if (displayName.length < 8) {
    return res
      .status(400).json({ message: '"displayName" length must be at least 8 characters long' });
  }

  if (password.length < 6) {
    return res
      .status(400).json({ message: '"password" length must be at least 6 characters long' });
  }

  const validateEmail = (userEmail) => {
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{3}$/g;
    return regex.test(userEmail);
  };

  if (!validateEmail(email)) {
    return res
      .status(400).json({ message: '"email" must be a valid email' });
  }

  next();
};