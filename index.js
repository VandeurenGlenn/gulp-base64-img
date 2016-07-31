'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var urlTobase64 = require('./lib/url-to-base64');

module.exports = function (opts) {
	opts = opts || {};

	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new gutil.PluginError('gulp-base64-img', 'Streaming not supported'));
			return;
		}

		try {
			file.contents = new Buffer(urlTobase64(String(file.path)));
			this.push(file);
		} catch (err) {
			this.emit('error', new gutil.PluginError('gulp-base64-img', err));
		}

		cb();
	});
};
