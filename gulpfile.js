var gulp = require('gulp')
var yaml = require('gulp-yaml')
var jsonConcat = require('gulp-json-concat')
var merge = require('merge-stream')
var jeditor = require("gulp-json-editor")
var rename = require("gulp-rename")
var jsonFormat = require('gulp-json-format')
var tv4 = require('gulp-tv4')
var through = require('through2')
var packageData = require('./package.json')


gulp.task('default', function() {
    var controllerJson = gulp.src('./controller/*.yml')
        .pipe(yaml({ space: 0 }))
        .pipe(tv4('./schema/controller.schema.json'))
        .pipe(through.obj(function(file, enc, callback) {
            callback(null, file);
            if (!file.tv4.valid) {
                throw new Error(file.tv4.error + ' at ' + file.path);
            }
        }))
        .pipe(jsonConcat('Controllers.json', function(data) {
            return new Buffer(JSON.stringify(data))
        }))

    var platformJson = gulp.src('./platform/*.yml')
        .pipe(yaml({ space: 0 }))
        .pipe(tv4('./schema/platform.schema.json'))
        .pipe(through.obj(function(file, enc, callback) {
            callback(null, file);
            if (!file.tv4.valid) {
                throw new Error(file.tv4.error + ' at ' + file.path);
            }
        }))
        .pipe(jsonConcat('Platforms.json', function(data) {
            return new Buffer(JSON.stringify(data))
        }))

    merge(platformJson, controllerJson)
        .pipe(jsonConcat('stone.json', function(data) {
            return new Buffer(JSON.stringify(data))
        }))
        .pipe(jeditor({
            'version': packageData.version
        }))
        .pipe(gulp.dest('./dist'))
        .pipe(rename("stone.dist.json"))
        .pipe(jsonFormat(0))
        .pipe(gulp.dest('./dist'))

})
