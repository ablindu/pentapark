// var gulp = require('gulp');
// var args = require('yargs').argv;
// var config = require('./gulp.config')();
// var del = require('del');
// var wiredep = require('wiredep').stream;
// var $ = require('gulp-load-plugins')({ lazy: true });
//
// gulp.task('help', function() {
//   var doc = 'gulp styles: Compiling less to css';
//
//   log($.util.colors.yellow(doc));
// });
//
// gulp.task('styles', ['clean-styles'], function() {
//   log('Compiling less to css');
//
//   return gulp
//     .src(config.less)
//     .pipe($.plumber())
//     .pipe($.if(args.verbose, $.print()))
//     .pipe($.less())
//     .pipe($.autoprefixer({ browsers: ['last 2 version', '> 5%'] }))
//     .pipe(gulp.dest(config.temp));
// });
//
// gulp.task('clean-styles', function(done) {
//   var files = config.temp + '**/*.css';
//
//   clean(files, done);
// });
//
// gulp.task('styles-watch', function() {
//   gulp.watch([config.less], ['styles']);
// });
//
// gulp.task('wiredep', ['styles'], function() {
//   log('Wire up the bower css js and out app js intro the index.jade');
//
//   var options = config.getWiredepDefaultOptions();
//
//   return gulp
//     .src(config.index)
//     .pipe(wiredep(options))
//     .pipe($.inject(gulp.src(config.inject).pipe($.if(args.verbose, $.print()))))
//     .pipe(gulp.dest(config.public));
// });
//
// gulp.task('serve-dev', ['wiredep'], function() {
//
//   var nodeOptions = {
//     script: config.server,
//     delayTime: 1,
//     watch: [config.server]
//   };
//
//   return $.nodemon(nodeOptions);
// });
//
//
// function clean(path, done) {
//   log('Cleaning:' + $.util.colors.blue(path));
//
//   del(path).then(done());
// }
//
// function log(message) {
//   if (typeof(message) === 'object') {
//     for (var item in message) {
//       if (message.hasOwnProperty(item)) {
//         $.util
//           .log($.util.colors.blue(message[item]));
//       }
//     }
//   } else {
//     $.util
//       .log($.util.colors.blue(message));
//   }
// }
