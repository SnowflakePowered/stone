const gulp = require('gulp')
const yaml = require('gulp-yaml')
const jsonConcat = require('gulp-json-concat')
const merge = require('merge-stream')
const jeditor = require('gulp-json-editor')
const rename = require('gulp-rename')
const jsonFormat = require('gulp-json-format')
const tv4 = require('gulp-tv4')
const through = require('through2')
const packageData = require('./package.json')

gulp.task('default', () => {
  let controllerJson = gulp.src('./controller/*.yml')
    .pipe(yaml({ space: 0 }))
    .pipe(tv4('./schema/controller.schema.json'))
    .pipe(through.obj((file, enc, callback) => {
      callback(null, file)
      if (!file.tv4.valid) {
        throw new Error(file.tv4.error + ' at ' + file.path)
      }
    }))
    .pipe(jsonConcat('Controllers.json', (data) => {
      return new Buffer(JSON.stringify(data))
    }))

  let platformJson = gulp.src('./platform/*.yml')
    .pipe(yaml({ space: 0 }))
    .pipe(tv4('./schema/platform.schema.json'))
    .pipe(through.obj((file, enc, callback) => {
      callback(null, file)
      if (!file.tv4.valid) {
        throw new Error(file.tv4.error + ' at ' + file.path)
      }
    }))
    .pipe(jsonConcat('Platforms.json', function (data) {
      return new Buffer(JSON.stringify(data))
    }))

  return merge(platformJson, controllerJson)
    .pipe(jsonConcat('stone.json', function (data) {
      return new Buffer(JSON.stringify(data))
    }))
    .pipe(jeditor({
      'version': packageData.version
    }))
    .pipe(gulp.dest('./dist'))
    .pipe(rename('stone.dist.json'))
    .pipe(jsonFormat(0))
    .pipe(gulp.dest('./dist'))
})

gulp.task('format-platform', () => {
  gulp.src('./platform/*.yml')
    .pipe(yaml({ space: 2, safe: true }))
    .pipe(gulp.dest('./src/platform'))
})

gulp.task('format-controller', () => {
  gulp.src('./controller/*.yml')
    .pipe(yaml({ space: 2, safe: true }))
    .pipe(gulp.dest('./src/controller'))
})
