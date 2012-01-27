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
        res.render('admin/browse', {
            title: 'poems',
            user: req.user,
            layout: '_layouts/admin'
        });
    });

    /*
     * GET /new
     */
    app.get('/new', auth.loadUser, function(req, res) {
        res.render('admin/new', {
            title: 'new poem',
            user: req.user,
            form: forms.adminForms.create(),
            layout: '_layouts/admin'
        });
    });

    /*
     * POST /new
     */
    app.post('/new', auth.loadUser, function(req, res) {

        // Pass control to form.
        forms.adminForms.create().handle(req, {

            // If field validations pass.
            success: function(form) {
                res.send('valid');
            },

            // If field validations fail.
            other: function(form) {
                res.render('admin/new', {
                    title: 'new poem',
                    user: req.user,
                    form: form,
                    layout: '_layouts/admin'
                });
            }

        });

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
