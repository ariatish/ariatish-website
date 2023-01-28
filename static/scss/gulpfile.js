var postcss = require('gulp-postcss');
var gulp = require('gulp');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');


gulp.task('css', gulp.series(
    function() {
        var plugin = [
            // PostCSS Plugins Here
            autoprefixer(),
            cssnano(),
        ];
        return gulp.src('../css/style.css')
            .pipe(postcss(plugin))
            .pipe(gulp.dest('../css/css-compiled'));
    })
);

gulp.task('serve', gulp.series(
    'css', async function() {
    })
);

gulp.task('default', gulp.series('serve'));