'use strict';

const requestPromise = require('request-promise');

module.exports = function() {

    this.When(/^a supermarket clerk want consult the current state the checkout "([^"]*)"$/, function(code, done) {
        const world = this;
        const options = {
            method: 'GET',
            uri: 'http://localhost:3000/api/checkouts/' + code,
            resolveWithFullResponse: true,
            simple: false
        };

        requestPromise(options)
            .then(function(response) {
                world.publishValue('checkoutRequestResponse', response);
                done();
            })
            .catch(function(err) {
                done(err);
            });
    });
};