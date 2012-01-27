/*
 * User model.
 *
 * @package     exquisite-haiku
 * @author      David McClure
 * @license     Apache 2.0
 */

var UserSchema = new Schema({
    username :  { type: String, unique: true },
    password :  { type: String },
    salt :      { type: String },
    email :     { type: String, unique: true },
});

mongoose.model('User', UserSchema)
