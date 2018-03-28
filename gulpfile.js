var gulp = require('gulp');
var sass = require('gulp-sass');


var sassSourceFile = 'source/style.scss';
var cssCopmiledFile = 'style';
var watchedFiles = 'source/**/*.scss';

gulp.task('buildcss', function(){
	return gulp.src(sassSourceFile)
		.pipe(sass())
		.pipe(gulp.dest(cssCopmiledFile));
});

gulp.task('watch', function(){
  gulp.watch(watchedFiles, ['buildcss']);
})