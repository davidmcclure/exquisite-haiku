/*
 * Form builders.
 *
 * @package     exquisite-haiku
 * @author      David McClure
 * @license     Apache 2.0
 */

 // Module dependencies.
var forms = require('forms')
  , fields = forms.fields
  , validators = forms.validators

// Authorization forms.
exports.authForms = {

    // Register.
    register: function() {

        return forms.create({

            username: fields.string({
                required: 'Enter a username.',
                validators: [validators.rangeLength(5, 20, '5-20 characters.')]
            }),

            password: fields.password({
                required: 'Enter a password.',
                validators: [validators.minLength(6, '> 6 characters')]
            }),

            confirm: fields.password({
                required: 'Confirm your password.',
                validators: [validators.matchField('password', 'Does not match.')]
            }),

            email: fields.email({
                required: 'Enter an email address.'
            })

        });

    },

    // Login.
    login: function() {

        return forms.create({

            username: fields.string({
                required: 'Enter a username.'
            }),

            password: fields.password({
                required: 'Enter a password.'
            })

        });

    }

};
