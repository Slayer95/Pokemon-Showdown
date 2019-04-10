'use strict';

const path = require('path');
const fs = require('fs');

const noop = () => {};

beforeAll(function () {
	process.on('unhandledRejection', err => {
		// I'd throw the err, but we have a heisenbug on our hands and I'd
		// rather not have it screw with Travis in the interim
		console.log(err);
	});

	// Preload dex
	global.Dex = require('../.sim-dist/dex').includeData();
	require('../.sim-dist');
}, 0);

