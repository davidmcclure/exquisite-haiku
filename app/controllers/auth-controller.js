/*
 * Authentication controller
 *
 * @package     exquisite-haiku
 * @author      David McClure
 * @license     Apache 2.0
 */

// Module dependencies.
var forms = require('../../helpers/forms')

// Models.
var User = mongoose.model('User');

// Controller actions.
module.exports = function(app) {

    /*
     * GET /register
     */
    app.get('/register', function(req, res) {

        // Render register form.
        res.render('auth/register', {
            title: 'register',
            form: forms.authForms.register(),
            layout: '_layouts/admin'
        });

    });

    /*
     * POST /register
     */
    app.post('/register', function(req, res) {

        // Pass control to form.
        forms.authForms.register().handle(req, {

            // If field validations pass.
            success: function(form) {

                // Create new user.
                var user = new User({
                    username: form.data.username,
                    email: form.data.email,
                    password: form.data.password
                });

                // Save and redirect.
                user.save(function() {
                    req.session.user_id = user.id;
                    res.redirect('/admin');
                });

            },

            // If field validations fail.
            other: function(form) {
                res.render('auth/register', {
                    title: 'register',
                    form: form,
                    layout: '_layouts/admin'
                });
            }

        });

    });

    /*
     * GET /login
     */
    app.get('/login', function(req, res) {
        res.render('auth/login', {
            title: 'login',
            form: forms.authForms.login(),
            layout: '_layouts/admin'
        });
    });

    /*
     * POST /login
     */
    app.post('/login', function(req, res) {

        // Pass control to form.
        forms.authForms.login().handle(req, {

            // If field validations pass.
            success: function(form) {
                // ** log in user.
                res.send('valid');
            },

            // If field validations fail.
            other: function(form) {
                res.render('auth/login', {
                    title: 'login',
                    form: form,
                    layout: '_layouts/admin'
                });
            }

        });
    });

}
