'use strict';

require('chai').should();

module.exports = function() {

	this.Then(/^the response code must be 200$/, function(done) {
		const world = this;

		const response = world.getValue('heartbeatResponse');
		response.statusCode.should.equal(200);

		done();
	});

};