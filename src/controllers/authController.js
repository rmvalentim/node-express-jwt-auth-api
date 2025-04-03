import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import '../config/dotenvConfig.js';

const SECRET_KEY = process.env.SECRET_KEY;
const JWT_EXPIRATION = process.env.JWT_EXPIRATION;;

export const login = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.scope('withPassword').findOne({ where: { username } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({id: user.id, username: user.username, role: user.role }, SECRET_KEY, {expiresIn: JWT_EXPIRATION});
    res.json({ token });  
};

export const register = async (req, res) => {
    const { username, password, role } = req.body;
    try {
        const user = await User.create({ username, password, role });
        const { password: _, ...userWithoutPassword } = user.get({ plain: true });
        res.status(201).json({ message: 'User created successfully', user: userWithoutPassword });
    } catch (error){
        res.status(400).json({ message: 'Error creating user', error });
    } 
};