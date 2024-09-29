const User = require("../models/userModel");
const bcrypt = require('bcrypt');
const { httpsCodes } = require("../constant/httpcode");
const { language } = require("../constant/language");
const jwt = require('jsonwebtoken');

exports.createUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ email, password: hashedPassword });

        await newUser.save();

        res.status(httpsCodes.CREATED).json({ message: "User created successfully." })

    } catch (error) {
        res.status(httpsCodes.BAD_REQUEST).json({ message: error.message });
    }
}

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: language.USER_NOT_FOUND });
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        const token = jwt.sign(
            { user:user  },
            'my_secret',
            { expiresIn: '1h' }
        )

        res.status(httpsCodes.CREATED).json({ message: "Login Successfully.", token, user })
    } catch (error) {
        res.status(httpsCodes.BAD_REQUEST).json({ message: error.message });
    }
}