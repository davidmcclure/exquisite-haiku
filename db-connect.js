/*
 * Database connector.
 *
 * @package     exquisite-haiku
 * @author      David McClure
 * @license     Apache 2.0
 */

exports = mongoose = require('mongoose')
mongoose.connect(config.db.uri)
exports = Schema = mongoose.Schema
