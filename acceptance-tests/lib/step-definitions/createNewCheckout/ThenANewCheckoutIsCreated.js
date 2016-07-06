'use strict';

require('chai').should();

module.exports = function() {

    this.Then(/^a new checkout is created with "([^"]*)" in the total value$/, function(total, done) {
        const world = this;

        const response = world.getValue('checkoutCreationResponse');
        response.statusCode.should.equal(201);

        response.body.should.be.deep.equal({
            total: {
                value: 0,
                currency: 'EUR'
            }
        });

        response.headers.location.should.be.equal('http://localhost:3000/api/checkouts/' + world.getValue('code'));

        done();
    });

};