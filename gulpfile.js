//jshint esversion: 6

const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');


exports.default = () => (
    gulp.src('./*.css')
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
);





// function cssautoprefixer() {
//   // place code for your default task here
// return src('./*.css')
// .pipe(autoprefixer({
//             cascade: false
//         }))
// .pipe(gulp.dest('./dist'));
// }
//
// module.exports = {
// cssautoprefixer
// };

//exports.default = defaultTask;
