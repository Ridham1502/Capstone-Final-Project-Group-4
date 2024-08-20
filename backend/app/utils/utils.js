const mongoose = require('mongoose')
const { validationResult } = require('express-validator')
const moment = require("moment")

const crypto = require('crypto')
const secret = process.env.JWT_SECRET
const algorithm = 'aes-256-cbc'
const key = crypto.scryptSync(secret, 'salt', 32)
const iv = Buffer.alloc(16, 0) 
var bcrypt = require('bcrypt');

const { isArray } = require('util')

/**
 * Handles error by printing to console in development env and builds and sends an error response
 * @param {Object} res - response object
 * @param {Object} err - error object
 */
exports.handleError = (res, err) => {
  // Prints error in console
  if (process.env.NODE_ENV === 'development') {
    console.log(err)
  }
  // Sends error to user
  res.status(err?.code ?? 500 ).json({
    errors: {
      msg: err.message
    },
    code: err?.code ?? 500
  })
}

/**
 * Builds error object
 * @param {number} code - error code
 * @param {string} message - error text
 */

exports.buildErrObject = (code, message) => {
  return {
    code,
    message
  }
}

/**
 * Checks is password matches
 * @param {string} password - password
 * @param {Object} user - user object
 * @returns {boolean}
 */

exports.checkPassword = async (password, user) => {
  return new Promise((resolve, reject) => {
    user.comparePassword(password, (err, isMatch) => {
      if (err) {
        console.log('err---->', err);
        reject(this.buildErrObject(422, err.message))
      }
      console.log('isMatch--xxxxxxxxx-------->', isMatch);
      if (!isMatch) {
        resolve(false)
      }
      resolve(true)
    })
  })
}

/**
 * Encrypts text
 * @param {string} text - text to encrypt
*/

exports.encrypt = (text) => {
  const cipher = crypto.createCipheriv(algorithm, key, iv)
  let encrypted = cipher.update(text, 'utf8', 'hex')
  encrypted += cipher.final('hex')
  return encrypted
}

/**
 * Decrypts text
 * @param {string} text - text to decrypt
*/

exports.decrypt = (text) => {
  const decipher = crypto.createDecipheriv(algorithm, key, iv)
  try {
    let decrypted = decipher.update(text, 'hex', 'utf8')
    decrypted += decipher.final('utf8')
    return decrypted
  } catch (err) {
    return err
  }
}
