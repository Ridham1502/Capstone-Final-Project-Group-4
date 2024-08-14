const Admin = require("../models/admin");
const utils = require("../utils/utils")
const uuid = require('uuid');
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")
const Movies = require('../models/movie')
const User = require('../models/user')
const Food = require('../models/food')
const Booking = require('../models/ticketbooking')

const generateToken = (_id, remember_me) => {
  const expiration = Math.floor(Date.now() / 1000) + (60 * 60 * 24 * (remember_me === true ? process.env.JWT_EXPIRATION_DAY_FOR_REMEMBER_ME : process.env.JWT_EXPIRATION_DAY));

    return utils.encrypt(
    jwt.sign(
      {
        data: {
          _id,
          type: 'admin'
        },
        exp: expiration
      },
      process.env.JWT_SECRET
    )
  )
}


exports.addAdmin = async (req, res) => {
  try {
    const data = {
      first_name: "admin",
      last_name: "admin",
      email: "admin@gmail.com",
      password: "12345",
      phone_number: "+14785120369",
      role: "admin",
    }

    const item = new Admin(data)
    await item.save();
    return res.status(200).json(item);
  } catch (error) {
    console.log(error);
    utils.handleError(res, error);
  }
};


exports.login = async (req, res) => {
  try {
    const { email, password, remember_me } = req.body;
    const user = await Admin.findOne({ email: email }, "+password");
    if (!user) return utils.handleError(res, { message: "Invalid login credentials. Please try again", code: 400 })

    const isPasswordMatch = await utils.checkPassword(password, user)
    console.log("isPasswordMatch", isPasswordMatch)
    if (!isPasswordMatch) {
      return utils.handleError(res, { message: "Invalid login credentials. Please try again", code: 400 })
    }

    let userObj = user.toJSON();
    delete userObj.password;

    const token = generateToken(user._id, remember_me);
    res.json({ code: 200, data: { user: userObj, token } })
  } catch (error) {
    utils.handleError(res, error)
  }
}

exports.forgotPassword = async (req, res) => {

  try {
    const { email, production } = req.body;

    let user = await Admin.findOne({ email });
    if (!user) return utils.handleError(res, { message: "No account found with the provided information", code: 400 });

    const token = uuid.v4();

    const tokenExpirationDuration = 5 * 60;
    const resetInstance = new ResetPassword({
      email: email,
      token: token,
      used: false,
      exp_time: new Date(Date.now() + tokenExpirationDuration * 1000)
    });

 
    await resetInstance.save();
    const mailOptions = {
      to: user.email,
      subject: "Password Reset Request",
      name: user.full_name,
      email: user.email,
      reset_link: production === false ? `${process.env.LOCAL_FRONTEND_URL}ui/Resetpassword/${token}` : `${process.env.PRODUCTION_FRONTEND_URL}ui/Resetpassword/${token}`
    }

    emailer.sendEmail(null, mailOptions, "forgotPasswordWithLink");

    return res.json({
      code: 200,
      message: "Reset link has been sent to your email",
    });

  } catch (err) {
    console.log(err)
    utils.handleError(res, err)
  }

}


exports.resetPassword = async (req, res) => {
  try {
    const { token, password } = req.body;
    const reset = await ResetPassword.findOne({ token: token });

       if (!reset || reset.used) {
      return utils.handleError(res, { message: 'Invalid or expired reset password token', code: 400 })
    }

    if (reset.exp_time < new Date()) {
      return utils.handleError(res, { message: 'Reset password token has expired', code: 400 })
    }

     const user = await Admin.findOne({ email: reset.email });

    user.password = password;
    await user.save();
    reset.used = true;
    reset.time = undefined;
    await reset.save();

    res.json({ message: 'Your password has been successfully reset', code: 200 });
  } catch (err) {
    console.error(err);
    utils.handleError(res, err)
  }
};



exports.changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const user_id = req.user._id

    let user = await Admin.findById(user_id, "+password");
    const isPasswordMatch = await utils.checkPassword(currentPassword, user);
    if (!isPasswordMatch) return utils.handleError(res, { message: "Current password is incorrect", code: 400 });

    const newPasswordMatch = await utils.checkPassword(newPassword, user);
    if (newPasswordMatch) return utils.handleError(res, { message: "New password must be different from the current password", code: 400 });

    user.password = newPassword;

    await user.save();

    res.status(200).json({ message: 'Password has been changed successfully', code: 200 });
  } catch (error) {
    utils.handleError(res, error);
  }
};




exports.createMovie = async (req, res) => {
  try {
    const data = req.body

    const moviedata = new Movies(data);
    await moviedata.save();

    return res.status(200).json({ message: 'Movie saved successfully' })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Internal server error" });
  }
}

exports.Movie = async (req, res) => {
  try {

    const moviedata = await Movies.find({})

    return res.status(200).json({ data: moviedata })
  } catch (error) {

    return res.status(500).json({ message: "Internal server error" });
  }
}


exports.listMovie = async (req, res) => {
  try {

    const moviedata = await Movies.find({ category: "movie" })

    return res.status(200).json({ data: moviedata })
  } catch (error) {

    return res.status(500).json({ message: "Internal server error" });
  }
}



exports.listEvents = async (req, res) => {
  try {

    const moviedata = await Movies.find({ category: "event" })

    return res.status(200).json({ data: moviedata })
  } catch (error) {

    return res.status(500).json({ message: "Internal server error" });
  }
}


exports.listAllMovieAndEvent = async (req, res) => {
  try {

    const moviedata = await Movies.find({})

    return res.status(200).json({ data: moviedata })
  } catch (error) {

    return res.status(500).json({ message: "Internal server error" });
  }
}


exports.editMovieDetails = async (req, res) => {
  try {
    const data = req.body;
    await Movies.findOneAndUpdate(
      { _id: new mongoose.Types.ObjectId(req.query.movieId) },
      data,
      { new: true }
    )
    return res.status(200).json({ message: "Edit successfully" });

  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Internal server error" });
  }
}

exports.MovieDetails = async (req, res) => {
  try {
    const id = req.query;
    console.log("id : " + id)
    const data = await Movies.findOne({ _id: new mongoose.Types.ObjectId(id) });
    return res.status(200).json({ data: data });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Internal server error" });
  }
}


exports.movieDeleteByid = async (req, res) => {
  try {
    const id = req.query.movieId;
    console.log("id : " + id)
    const data = await Movies.findOneAndDelete({ _id: new mongoose.Types.ObjectId(id) });
    return res.status(200).json({ message: "Delete successfully" });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Internal server error" });
  }
}


exports.listAllUser = async (req, res) => {
  try {
    let query = {};
    if (req.query.search) {
      query = { full_name: { $regex: new RegExp(req.query.search, 'i') } };
    }

    const userdata = await User.find(query);

    return res.status(200).json({ data: userdata });
  } catch (error) {
    console.error('Error fetching users:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};




exports.addFood = async (req, res) => {
  try {
    const data = req.body

    const Fooddata = new Food(data);
    await Fooddata.save();

    return res.status(200).json({ message: 'Fooddata saved successfully' })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Internal server error" });
  }
}


exports.listAllFood = async (req, res) => {
  try {
    const fooddata = await Food.find({});

    return res.status(200).json({ data: fooddata });
  } catch (error) {
    console.error('Error fetching users:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

exports.listAllBooking = async (req, res) => {
  try {
    const bookingdata = await Booking.find({}).populate('movieId').populate('addonfood');

    return res.status(200).json({ data: bookingdata });
  } catch (error) {
    console.error('Error fetching users:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};



exports.foodDeleteByid = async (req, res) => {
  try {
    const id = req.query.foodId;
    console.log("id : " + id)
    const data = await Food.findOneAndDelete({ _id: new mongoose.Types.ObjectId(id) });
    return res.status(200).json({ message: "Delete successfully" });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Internal server error" });
  }
}


exports.userDeleteByid = async (req, res) => {
  try {
    const id = req.query.userId;
    console.log("id : " + id)
    await User.findOneAndDelete({ _id: new mongoose.Types.ObjectId(id) });
    return res.status(200).json({ message: "Delete successfully" });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Internal server error" });
  }
}