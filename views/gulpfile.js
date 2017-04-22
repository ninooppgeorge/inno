var gulp = require("gulp");
var connect = require("gulp-connect");
var sass = require("gulp-sass");
var jade = require('jade');
var gulpJade = require('gulp-jade');
var katex = require('katex');

jade.filters.katex = katex.renderToString;
jade.filters.shoutFilter = function (str) {
  return str + '!!!!';
}

    gulp.task('connect', function() {
      connect.server({
        livereload: true
      });
    });

    gulp.task('html', function () {
      gulp.src('*.html')
        .pipe(connect.reload());
    });

    gulp.task('jade', function(){
      gulp.src('./jade/*.jade')
        .pipe(gulpJade({
          jade: jade,
          pretty: true
        }))
        .pipe(gulp.dest('./html'))
    })

    gulp.task('watch', function () {
      gulp.watch(['*.html'], ['html']);
      gulp.watch(['./jade/*.jade'], ['jade']);
    });

    gulp.task('default', ['connect', 'watch']);
