const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const auth = require('../middleware/auth');
const router = express.Router();
const { JWT_SECRET } = process.env;

router.post('/signup', async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    const token = jwt.sign({ _id: user._id }, JWT_SECRET);
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user || !(await user.comparePassword(req.body.password))) {
      return res.status(400).send({ error: 'Invalid login credentials' });
    }
    const token = jwt.sign({ _id: user._id }, JWT_SECRET);
    res.send({ user, token });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
