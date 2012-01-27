/*
 * Poem model.
 *
 * @package     exquisite-haiku
 * @author      David McClure
 * @license     Apache 2.0
 */

// Load models.
require('./round.js');
var Round = mongoose.model('Round');

// Schema definition.
var Poem = new Schema({
    created:            { type: Date, default: Date.now },
    slug:               { type: String, unique: true },
    roundLength:        Number,
    sliceInterval:      Number,
    minSubmissions:     Number,
    submissionValue:    Number,
    decayLifetime:      Number,
    seedCapital:        Number,
    rounds:             [Round]
});

mongoose.model('Poem', Poem)
