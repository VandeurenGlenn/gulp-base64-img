# gulp-base64img [![Build Status](https://travis-ci.org/vandeurenglenn/gulp-base64img.svg?branch=master)](https://travis-ci.org/vandeurenglenn/gulp-base64img)

> A gulp plugin for encoding images to base64

## Info

Encodes images to base64 using [base64-img](https://github.com/douzi8/base64-img)

## Install

```
$ npm install --save-dev gulp-base64-img
```


## Usage

```js
const gulp = require('gulp');
const base64img = require('gulp-base64-img');

gulp.task('default', () => {
	gulp.src('src/file.ext')
		.pipe(base64img())
		.pipe(gulp.dest('dist'))
);
```

### Combining with other plugins
```js
const gulp = require('gulp');
const append = require('gulp-append');
const base64img = require('gulp-base64-img');
const nameFromPath = require('name-from-path');

gulp.task('default', () => {
  return gulp.src('img/*').pipe(base64img()).pipe(append('test.json', {
    transform: {
      name: function(file) {
        return nameFromPath(file, true);
      }
    }
  }))
});
```


## API

### base64img([options])

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.

## License

MIT © [Glenn Vandeuren](https://github.com/vandeurenglenn)
