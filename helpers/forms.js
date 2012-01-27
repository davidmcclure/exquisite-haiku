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
                label: 'username',
                required: 'Enter a username.',
                validators: [
                    validators.rangeLength(5, 20, '5-20 characters.'),
                    customValidators.uniqueUsername('Username taken.')
                ]
            }),

            password: fields.password({
                label: 'password',
                required: 'Enter a password.',
                validators: [validators.minLength(6, '> 6 characters')]
            }),

            confirm: fields.password({
                label: 'confirm',
                required: 'Confirm your password.',
                validators: [validators.matchField('password', 'Does not match.')]
            }),

            email: fields.email({
                label: 'email',
                required: 'Enter an email address.',
                validators: [customValidators.uniqueEmail('Email taken.')]
            })

        });

    },

    // Login.
    login: function() {

        return forms.create({

            username: fields.string({
                label: 'username',
                required: 'Enter a username.',
                validators: [customValidators.usernameExists('Does not exist.')]
            }),

            password: fields.password({
                label: 'password',
                required: 'Enter a password.',
                validators: [customValidators.passwordCorrectness('Incorrect.')]
            })

        });

    }

};

// Admin forms.
exports.adminForms = {

    // Create poem.
    create: function() {

        return forms.create({

            slug: fields.string({
                label: 'slug',
                required: 'Enter a slug.'
            }),

            roundLength: fields.string({
                label: 'round length',
                required: 'Enter a round length.',
                validators: [
                    customValidators.isInteger('Must be an integer.'),
                    customValidators.isPositive('Must be positive.'),
                ]
            }),

            sliceInterval: fields.string({
                label: 'slicing interval',
                required: 'Enter a slicing interval.',
                validators: [
                    customValidators.isInteger('Must be an integer.'),
                    customValidators.isPositive('Must be positive.'),
                ]
            }),

            minSubmissions: fields.string({
                label: 'minimum submissions',
                required: 'Enter a minimum number of submissions.',
                validators: [
                    customValidators.isInteger('Must be an integer.'),
                    customValidators.isPositive('Must be positive.'),
                ]
            }),

            submissionValue: fields.string({
                label: 'submission value',
                required: 'Enter a value for blind submissions.',
                validators: [
                    customValidators.isInteger('Must be an integer.'),
                    customValidators.isPositive('Must be positive.'),
                ]
            }),

            decayLifetime: fields.string({
                label: 'decay lifetime',
                required: 'Enter a decay lifetime.',
                validators: [
                    customValidators.isInteger('Must be an integer.'),
                    customValidators.isPositive('Must be positive.'),
                ]
            }),

            seedCapital: fields.string({
                label: 'seed capital',
                required: 'Enter a seed capital quantity.',
                validators: [
                    customValidators.isInteger('Must be an integer.'),
                    customValidators.isPositive('Must be positive.'),
                ]
            })

        });

    }

};
