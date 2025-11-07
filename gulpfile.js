const gulp = require('gulp');
const browserSync = require('browser-sync').create();

// Serve files from docs folder
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./docs"
        }
    });

    gulp.watch("./docs/**/*.html").on('change', browserSync.reload);
    gulp.watch("./docs/**/*.css").on('change', browserSync.reload);
    gulp.watch("./docs/**/*.js").on('change', browserSync.reload);
});

// Default task
gulp.task('default', gulp.series('serve'));
