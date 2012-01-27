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
  , customValidators = require('./validators');

// Authorization forms.
exports.authForms = {

    // Register.
    register: function() {

        return forms.create({

            username: fields.string({
                required: 'Enter a username.',
                validators: [
                    validators.rangeLength(5, 20, '5-20 characters.'),
                    customValidators.uniqueUsername('Username taken.')
                ]
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
                required: 'Enter an email address.',
                validators: [customValidators.uniqueEmail('Email taken.')]
            })

        });

    },

    // Login.
    login: function() {

        return forms.create({

            username: fields.string({
                required: 'Enter a username.',
                validators: [customValidators.usernameExists('Does not exist.')]
            }),

            password: fields.password({
                required: 'Enter a password.',
                validators: [customValidators.passwordCorrectness('Incorrect.')]
            })

        });

    }

};
