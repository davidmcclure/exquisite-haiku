/*
 * Custom form validators methods.
 *
 * @package     exquisite-haiku
 * @author      David McClure
 * @license     Apache 2.0
 */

// Models.
var User = mongoose.model('User');

// Username availability.
exports.uniqueUsername = function(msg) {
    return function(form, field, callback) {
        User.findOne({username: field.data}, function(err, doc) {
            if (doc === null) callback();
            else callback(msg);
        });
    }
}

// Email availability.
exports.uniqueEmail = function(msg) {
    return function(form, field, callback) {
        User.findOne({email: field.data}, function(err, doc) {
            if (doc === null) callback();
            else callback(msg);
        });
    }
}
