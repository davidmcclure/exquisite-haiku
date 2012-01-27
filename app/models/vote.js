/*
 * Vote model.
 *
 * @package     exquisite-haiku
 * @author      David McClure
 * @license     Apache 2.0
 */

// Schema definition.
var Vote = new Schema({
    quantity :          Number,
    created :           { type: Date, default: Date.now }
});

mongoose.model('Vote', Vote)
