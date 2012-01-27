/*
 * User model.
 *
 * @package     exquisite-haiku
 * @author      David McClure
 * @license     Apache 2.0
 */

// Module dependencies.
var crypto = require('crypto');

// Schema definition.
var UserSchema = new Schema({
    username :  { type: String, unique: true },
    hash :      { type: String },
    salt :      { type: String },
    email :     { type: String, unique: true },
});

// Id getter.
User.virtual('id').get(function() {
    return this._id.toHexString();
});

// Password setter and getter.
User.virtual('password').set(function(password) {
    this._password = password;
    this.salt = this.generateSalt();
    this.hash = this.encryptPassword(password);
}).get(function() {
    return this._password;
});

// Check password.
User.method('authenticate', function(plainText) {
    return this.encryptPassword(plainText) === this.hash;
});

// Create salt.
User.method('generateSalt', function() {
    return Math.round((new Date().valueOf() + Math.random())) + '';
});

// Encrypt password.
User.method('encryptPassword', function() {
    return crypto.creatHmac('sha1', this.salt).update(password).digest('hex');
});

mongoose.model('User', UserSchema)
