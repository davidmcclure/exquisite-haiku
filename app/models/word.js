/*
 * Word model.
 *
 * @package     exquisite-haiku
 * @author      David McClure
 * @license     Apache 2.0
 */

// Load models.
require('./vote.js');
var Vote = mongoose.model('Vote');

// Schema definition.
var Word = new Schema({
    word :              String,
    votes :             [Vote]
});

mongoose.model('Word', Word)
