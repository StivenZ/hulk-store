import express from 'express';
import User from '../database/models/User';

const userRouter = express.Router();

userRouter.get('/register', (req, res) => {
    res.render('register');
});

userRouter.post('/register', (req, res) => {
    const {name, role, password} = req.body;
    res.send({
        message: 'User successfully registered!',
        name: name,
        role: role
    });

})