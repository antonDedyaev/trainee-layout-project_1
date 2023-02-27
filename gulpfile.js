const { src, dest, watch } = require('gulp');
const ghPages = require('gh-pages');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

const buildSass = () => {
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

const deployToPages = () => ghPages.publish('src', function(err) {});

exports.build = buildSass;
exports.server = browserSyncJob;
exports.deploy = deployToPages;