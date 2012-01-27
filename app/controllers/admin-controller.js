/*
 * Admin controller
 *
 * @package     exquisite-haiku
 * @author      David McClure
 * @license     Apache 2.0
 */

// Module dependencies.
var forms = require('../../helpers/forms')
var auth = require('../../helpers/auth')

// Models.
// var User = mongoose.model('User');

// Controller actions.
module.exports = function(app) {

    /*
     * GET /admin
     */
    app.get('/admin', auth.loadUser, function(req, res) {
        res.send('GET /admin');
    });

    /*
     * GET /new
     */
    app.get('/new', function(req, res) {
        res.send('GET /new');
    });

    /*
     * POST /register
     */
    app.post('/new', function(req, res) {
        res.send('POST /new');
    });

    /*
     * POST /start
     */
    app.post('/start', function(req, res) {
        res.send('POST /start');
    });

    /*
     * POST /stop
     */
    app.post('/stop', function(req, res) {
        res.send('POST /stop');
    });

}
