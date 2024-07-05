const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
const validator = require("validator");
const mongoosePaginate = require("mongoose-paginate-v2");

const UserSchema = new mongoose.Schema(
    {
        profile_image: {
            type: String
        },
        full_name: {
            type: String,
        },
        email: {
            type: String,
            validate: {
                validator: validator.isEmail,
                message: "EMAIL_IS_NOT_VALID",
            },
            unique: true,
            lowercase: true,
            required: true,
        },
        phone_number_code: {
            type: String,
        },
        phone_number: {
            type: String,
            unique: true,
            required: true
        },
        bio: {
            type: String
        },
        password: {
            type: String,
            required: true,
            select: false
        },
        decoded_password: {
            type: String
        },
        role: {
            type: String,
            enum: ["user"],
            required: true
        },
        
    },
    {
        timestamps: true,
    }
);

const hash = (user, salt, next) => {
    bcrypt.hash(user.password, salt, null, (error, newHash) => {
        if (error) {
            return next(error);
        }
        user.password = newHash;
        return next();
    });
};

const genSalt = (user, SALT_FACTOR, next) => {
    bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
        if (err) {
            return next(err);
        }
        return hash(user, salt, next);
    });
};

UserSchema.pre("save", function (next) {
    const that = this;
    const SALT_FACTOR = 5;

    this.decoded_password = this.password

    if (!that.isModified("password")) {
        return next();
    }
    return genSalt(that, SALT_FACTOR, next);
});


UserSchema.methods.comparePassword = function (passwordAttempt, cb) {
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) =>
        err ? cb(err) : cb(null, isMatch)
    );
};

UserSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("users", UserSchema);
