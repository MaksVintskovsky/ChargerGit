const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const del = require('del');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const less = require('gulp-less');

const cssFiles = [
	'./less/main.less'
];
const jsFiles = [
	'./js/main.js'
];
function styles(){
	return gulp.src(cssFiles)
				.pipe(sourcemaps.init())
				// .pipe(concat('all.css'))
		        .pipe(less())

				.pipe(autoprefixer({
					// overrideBrowserslist: ['> 0.1%'],
		            cascade: false
		        }))
		        // .pipe(cleanCSS({level: 2}))
		        .pipe(sourcemaps.write('./'))
				.pipe(gulp.dest('./css'))
				.pipe(browserSync.stream());
}
function scripts(){
	return gulp.src(jsFiles)
				// .pipe(concat('all.js'))
				// .pipe(uglify({toplevel: true}))
				// .pipe(gulp.dest('./build/js'))
				// .pipe(browserSync.stream());
}
function watch(){
	 browserSync.init({
        server: {
            baseDir: "./"
        },
        // tunnel: true
    });
	// gulp.watch('./src/css/**/*.css', styles)
	gulp.watch('./less/**/*.less', styles)
	// gulp.watch('./js/**/*.js', scripts)
	gulp.watch('./*.html', browserSync.reload)
}
function clean(){
	return del(['scc/*']);
}
// gulp.task('styles', styles);
// gulp.task('scripts', scripts);
gulp.task('watch', watch);
gulp.task('build', gulp.series(clean,
						gulp.parallel(styles, scripts)
					));
gulp.task('dev',  gulp.series('build', 'watch'));