const User = require('../models/user');
const Organization=require('../models/organization.model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const handleLogin = async (req, res) => {
    console.log("PASSEDDD")
    console.log(req.body)
    const { username, password, email } = req.body;
    if ((!username||!email)&&!password) return res.status(400).json({ 'message': 'Username and password are required.' });

    const foundUser = await User.findOne({ username: username }).exec();
    console.log(foundUser)
    const foundUser1= await Organization.findOne({email:email}).exec();
    console.log(foundUser1)
    if (!foundUser||!foundUser1) return res.sendStatus(401); //Unauthorized 
    // evaluate password 
    const match = await bcrypt.compare(password, foundUser.password);
    const match1=await bcrypt.compare(password,foundUser1.password);
    if (match) {
        const roles = Object.values(foundUser.roles).filter(Boolean);
        console.log("PASSED1");
        // create JWTs
        const accessToken = jwt.sign(
            {
                "UserInfo": {
                    "username": foundUser.username,
                    "roles": roles
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '1h' }
        );
        const refreshToken = jwt.sign(
            { "username": foundUser.username },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d' }
        );
        // Saving refreshToken with current user
        foundUser.refreshToken = refreshToken;
        const result = await foundUser.save();
        console.log(result);
        console.log(roles);

        // Creates Secure Cookie with refresh token
        res.cookie('jwt', refreshToken, { httpOnly: true, secure: true, sameSite: 'None', maxAge: 24 * 60 * 60 * 1000 });

        // Send authorization roles and access token to user
        res.json({ roles, accessToken });

    } else if(match1) {
        console.log("PASSED2");
        const roles = Object.values(foundUser1.roles).filter(Boolean);
        // create JWTs
        const accessToken = jwt.sign(
            {
                "UserInfo": {
                    "username": foundUser1.username,
                    "roles": roles
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '1h' }
        );
        const refreshToken = jwt.sign(
            { "username": foundUser1.username },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d' }
        );
        // Saving refreshToken with current user
        foundUser1.refreshToken = refreshToken;
        const result = await foundUser1.save();
        console.log(result);
        console.log(roles);

        // Creates Secure Cookie with refresh token
        res.cookie('jwt', refreshToken, { httpOnly: true, secure: true, sameSite: 'None', maxAge: 24 * 60 * 60 * 1000 });

        // Send authorization roles and access token to user
        res.json({ roles, accessToken });
        
    }else{
        res.sendStatus(401);
    }
}

module.exports = { handleLogin };