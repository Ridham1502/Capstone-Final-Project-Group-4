const path = require('path')
const {
    uploadFileToLocal
} = require("../utils/helpers");

const absolutePath = path.join(__dirname, '../../public/');

const utils = require('../utils/utils')
const jwt = require("jsonwebtoken")
const { default: mongoose } = require('mongoose');




const OTP = require('../models/otp')
const User = require('../models/user')




exports.test = async (req, res) => {
    try {
        console.log("user test routes")
        res.send("User Routes test")
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" })
    }
}



// -------------------------------- LOGIN & SIGNUP ---------------------
const generateToken = (_id) => {
    const expiration = Math.floor(Date.now() / 1000) + (60 * 60 * 24 * process.env.JWT_EXPIRATION_DAY)
    return utils.encrypt(
        jwt.sign(
            {
                data: {
                    _id,
                    type: "user"
                },
                // exp: expiration
            },
            process.env.JWT_SECRET
        )
    )
}

const registerUser = async data => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = new User(data)
            await user.save()
            resolve(user)
        } catch (error) {
            reject(error)
        }
    })
}


/**
 * Saves a new user access and then returns token
 * @param {Object} req - request object
 * @param {Object} user - user object
 */

const saveUserAccessAndReturnToken = async (req, user) => {
    return new Promise(async (resolve, reject) => {

        try {
            resolve(generateToken(user._id))
        } catch (error) {
            reject(error)
        }

    })
}

exports.checkPhoneNumberExist = async (req, res) => {
    try {
        const { phone_number } = req.body;
        const doesPhoneNumberExist = await emailer.checkMobileExists(phone_number);
        res.json({ data: doesPhoneNumberExist, code: 200 })
    } catch (error) {
        utils.handleError(res, error);
    }
}


exports.checkEmailExist = async (req, res) => {
    try {
        const { email } = req.body;
        const doesEmailExists = await emailer.emailExists(email);
        res.json({ data: doesEmailExists, code: 200 })
    } catch (error) {
        utils.handleError(res, error);
    }
}


exports.login = async (req, res) => {
    try {
        const data = req.body;
        let user = await User.findOne({ $or: [{ email: data.email }, { username: data.email }] }, "+password");

        if (!user) return utils.handleError(res, { message: "Invalid login credentials. Please try again", code: 400 });

     

        const isPasswordMatch = await utils.checkPassword(data.password, user);
        if (!isPasswordMatch) return utils.handleError(res, { message: "Invalid login credentials. Please try again", code: 400 });

        const token = await saveUserAccessAndReturnToken(req, user)
        user = user.toJSON()
        delete user.password
        res.status(200).json({ code: 200, data: { user: user, token: token } });
    } catch (error) {
        utils.handleError(res, error);
    }
};



exports.signup = async (req, res) => {
    try {
        const data = req.body;

        const doesEmailExists = await emailer.emailExists(data.email);
        if (doesEmailExists) return res.status(400).json({ message: "This email address is already registered", code: 400 });

        const doesPhoneNumberExist = await emailer.checkMobileExists(data.phone_number);
        if (doesPhoneNumberExist) return res.status(400).json({ message: "This phone number is already registered", code: 400 });

        // const isPhoneNumberVerified = await checkPhoneNumberVerified(data.phone_number);
        // if (!isPhoneNumberVerified) return res.status(400).json({ message: "Your phone number has not been verified. Please verify your phone number to continue", code: 400 });
        // if (data.backup_email && data.backup_email === data.email) return res.status(400).json({ message: "Backup email address cannot be the same as the primary email address. Please enter a different email", code: 400 });

        let user = await registerUser(data);
        const token = await saveUserAccessAndReturnToken(req, user)

        user = user.toJSON()
        delete user.password

        res.status(200).json({ code: 200, data: { user: user, token: token } });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};



exports.changePassword = async (req, res) => {
    try {
        const { currentPassword, newPassword } = req.body;
        const user_id = req.user._id

        let user = await User.findById(user_id, "+password");
        const isPasswordMatch = await utils.checkPassword(currentPassword, user);
        if (!isPasswordMatch) return utils.handleError(res, { message: "Current password is incorrect", code: 400 });

        const newPasswordMatch = await utils.checkPassword(newPassword, user);
        if (newPasswordMatch) return utils.handleError(res, { message: "New password must be different from the current password", code: 400 });

        user.password = newPassword;

        await user.save();

        res.status(200).json({ message: 'Password has been changed successfully' });
    } catch (error) {
        utils.handleError(res, error);
    }
};



// ---------------------------------------------------------------------

exports.uploadFileToServer = async (req, res) => {
    try {
        var file = await uploadFileToLocal({
            image_data: req.files.media,
            path: `${process.env.STORAGE_PATH}${req.body.path}`,
        });

        const path = `${process.env.STORAGE_PATH_HTTP}${req.body.path}/${file}`


        res.json({
            code: 200,
            path: path,
        });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" })
    }
}



exports.getProfile = async (req, res) => {
    try {
        const data = await User.findOne({ _id: new mongoose.Types.ObjectId(req.user._id) });

        return res.status(200).json({ data: data });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}