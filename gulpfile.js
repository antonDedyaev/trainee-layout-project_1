const { src, task,  dest, watch } = require('gulp');
const ghPages = require('gulp-gh-pages');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

const buildSass = () => {
  console.log('Компиляция SASS');

  return src('src/sass/app.scss')
    .pipe(sass())
    .pipe(dest('src/css/'))
    .pipe(browserSync.stream());
}

const browserSyncJob = () => {
  browserSync.init({
    server: "src/"
  });

  watch('src/sass/*.scss', buildSass);
};

task('deploy', function() {
  return src('./src/*')
    .pipe(ghPages());
})

exports.build = buildSass;
exports.server = browserSyncJob;