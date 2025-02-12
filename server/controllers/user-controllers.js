const User = require('../db/models/user-schema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const generator = require('generate-password');
const nodemailer = require('nodemailer');

module.exports.signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const user = await User.findOne({ email: email });
    if (user) {
      return res.status(400).json({ message: 'Account already exists' });
    }

    // var generatePassword = generator.generate({
    //   length: 10,
    //   numbers: true,
    // });

    // const hashedPassword = await bcrypt.hash(generatePassword, 2);
    const hashedPassword = await bcrypt.hash(password, 2);
    const dbResponse = await User.create({
      username: username,
      email: email,
      password: hashedPassword,
    });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'atsprogramtests@gmail.com',
        pass: 'trxh yhos klpi bwaz',
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: 'atsprogramtests@gmail.com',
      to: email,
      subject: 'SpendWise - Personal Finance Tracker Access Details',
      text: `Hello ${username},
      Welcome to SpendWise your login credentials are provided below.
      Password: ${password}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        return res
          .status(201)
          .json({ message: 'you are signed up', error: false });
      }
    });
  } catch (e) {
    res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(400).json({ message: 'Email or Password incorrect' });
    }

    const isMatching = await bcrypt.compare(password, user.password);
    if (!isMatching) {
      return res.status(400).json({ message: 'Password is incorrect' });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.SECRET_KEY,
      {
        expiresIn: '7d',
      }
    );

    res.status(200).json({
      message: 'You are logged in',
      token: token,
      id: user._id,
      role: 'USER',
    });
  } catch (e) {
    res.status(500).json({ message: e.message, error: true });
  }
};
