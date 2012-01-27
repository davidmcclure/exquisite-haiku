/*
 * Custom form validators methods.
 *
 * @package     exquisite-haiku
 * @author      David McClure
 * @license     Apache 2.0
 */

// Presence.
exports.required = function(msg) {
    return function(form, field, callback) {
        if (field.data.length == 0) callback();
        else callback(msg);
    }
}

// Range length.
exports.rangeLength = function(min, max, msg) {
    return function(form, field, callback) {
        if (field.data.length >= min && field.data.length <= max) callback();
        else callback(msg);
    }
}
