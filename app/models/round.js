/*
 * Round model.
 *
 * @package     exquisite-haiku
 * @author      David McClure
 * @license     Apache 2.0
 */

// Load models.
var Word = mongoose.model('Word');

// Schema definition.
var Round = new Schema({
    started :           { type: Date, default: Date.now },
    words :             [Word]
});

mongoose.model('Round', Round)
