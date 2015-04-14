var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    clean = require('gulp-clean');

gulp.task('images', function() {
    return gulp.src('src/images/**/*')
        .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
        .pipe(gulp.dest('dist/assets/img'))
        .pipe(notify({ message: 'Images task complete' }));
});

gulp.task('clean', function() {
    return gulp.src(['dist/assets/css', 'dist/assets/js', 'dist/assets/img'], {read: false})
        .pipe(clean());
});

gulp.task('default', ['clean'], function() {
    gulp.start('images');
});


gulp.task('watch', function() {
    // 看守所有圖片檔
    gulp.watch('src/images/**/*', ['images']);

    // 看守所有位在 dist/  目錄下的檔案，一旦有更動，便進行重整
    gulp.watch(['dist/**']).on('change', function(file) {
        console.log("==changed=", file);
    });

});