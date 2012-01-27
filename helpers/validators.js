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
exports.uniqueUsername = function(username, msg) {
    return function(form, field, callback) {
        // if (field.data.length == 0) callback();
        // else callback(msg);
    }
}
