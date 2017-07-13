// REACT
var gulp = require('gulp');
var eslint = require('gulp-eslint');
var babelify = require('babelify');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');
var newer = require('gulp-newer');
var concat = require('gulp-concat');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

var onError = function(err){
    notify.onError({
        title: "Error",
        message: "<%= error %>"
    })(err);
    this.emit('end');
};

var plumberOptions = {
    errorHandler: onError,
};

var jsFiles = {
    vendor: [],
    source: [
        './jsx/*',
    ]
};

gulp.task('eslint', function(){
    return gulp.src(jsFiles.source)
        .pipe(eslint({
            baseConfig: {
                "ecmaFeatures": {
                    "jsx": true,
                    "modules": true
                }
            }
        }))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('concat', [], function(){
    return browserify('./jsx/app.jsx') // This is the entry point which will import all the necessary files
        .transform(
            babelify.configure({
              presets: ["es2015", "react"] // Transforms es6 to es5 and jsx to js
            })
        )
        .bundle() // makes single bundled file with al the code
        .pipe(source('app.js')) //takes output from browserify and transforms it from streaming vinyl file object to buffered vinyl file object
        .pipe(gulp.dest('./js')); // saves it to a dest dir
});

// BrowserSync
gulp.task('browsersync', function(){
    browserSync({
        server: {
            baseDir: './jsx/'
        },
        open: false,
        online: false,
        notify: false
    });
});

gulp.task('react-build', ['concat']);

