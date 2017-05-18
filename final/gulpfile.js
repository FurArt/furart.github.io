
/* ---------- START CONFIG ---------- */

/* files */
sassFiles = ['./src/sass/*.scss'];
cssFiles = [
  './src/css/*.css'
];
jsFiles = [
  './node_modules/jquery/dist/jquery.min.js',
  './node_modules/slick-carousel/slick/slick.min.js',
  './node_modules/jquery-colorbox/jquery.colorbox-min.js',
  'src/js/*.js',
];
htmlFiles = ['./src/*.html', './src/favicon.png'];
imgFiles = ['./src/img/**/*.*'];
imgFilesPng = ['./src/img/png/*.*'];
fontsFiles = [
  './src/fonts/*'
];
anotherFiles = ['./src/extra/**/*.*', './src/audio/*'];

/* minify css and js */
const MINIFY = true;

/* ---------- END CONFIG ---------- */

/* require plugins */
const gulp = require('gulp');
const gulpif = require('gulp-if');
const watch = require('gulp-watch');
const clean = require('gulp-clean');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const browserSync = require('browser-sync').create();
const spritesmith = require('gulp.spritesmith'); //spritesmith! - AD AF
const reload = browserSync.reload;

/* PostCSS processors */
var processors = [
  autoprefixer({ browsers: ['last 3 versions'] })
];
if (MINIFY) processors.push(cssnano());

/* clean build folder */
gulp.task('clean', () =>
  gulp.src('./build/', {read: false})
  .pipe(clean())
);

/* build sprite IMG*/
if (imgFilesPng.length) {
  gulp.task('sprite', function () {
    var spriteData = gulp.src(imgFilesPng).pipe(spritesmith({
      imgName: '../img/sprite.png',
      cssName: '_sprite.scss'
    }));
    console.log(spriteData);
    return spriteData.img.pipe(gulp.dest('./src/img/')),
    spriteData.css.pipe(gulp.dest('./src/sass/'));
    // spriteData.imgName.pipe(gulp.dest('./src/sass/'));
  });
};

/* build sass */
if (sassFiles.length) {
  gulp.task('sass', () =>
    gulp.src(sassFiles)
    .pipe(sass({includePaths: './src/sass'}).on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest('./build/css/'))
    .pipe(reload({stream: true}))
  );
};


/* build css */
if (cssFiles.length) {
  gulp.task('css', () =>
    gulp.src(cssFiles)
    .pipe(postcss(processors))
    .pipe(gulp.dest('./build/css/'))
    .pipe(reload({stream: true}))
  );
}

/* build js */
if (jsFiles.length) {
  gulp.task('js', () =>
    gulp.src(jsFiles)
    .pipe(gulpif(MINIFY, uglify()))
    .pipe(gulp.dest('./build/js/'))
    .pipe(reload({stream: true}))
  );
}

/* build html */
if (htmlFiles.length) {
  gulp.task('html', () =>
    gulp.src(htmlFiles)
    .pipe(gulp.dest('./build/'))
    .pipe(reload({stream: true}))
  );
}


/* build img */
if (imgFiles.length) {
  gulp.task('img', () =>
    gulp.src(imgFiles)
    .pipe(gulp.dest('./build/img/'))
    .pipe(reload({stream: true}))
  );
};


/* build fonts */
if (fontsFiles.length) {
  gulp.task('fonts', () =>
    gulp.src(fontsFiles)
    .pipe(gulp.dest('./build/fonts/'))
  );
}

/* build files */
if (anotherFiles.length) {
  gulp.task('files', () =>
    gulp.src(anotherFiles)
    .pipe(gulp.dest('./build/files/'))
  );
}

/* create new build */
gulp.task('build', ['clean'], () => {
  if (imgFilesPng.length) gulp.start('sprite'); // srtite build
  if (sassFiles.length) gulp.start('sass'); // sass build
  if (cssFiles.length) gulp.start('css'); // css build
  if (jsFiles.length) gulp.start('js'); // js build
  if (htmlFiles.length) gulp.start('html'); // html build
  if (imgFiles.length) gulp.start('img'); // img build
  if (fontsFiles.length) gulp.start('fonts'); // fonts build
  if (anotherFiles.length) gulp.start('files'); // files build
});

/* start default task */
gulp.task('default', ['build'], () => {
  if (sassFiles.length) watch(sassFiles, () => gulp.start('sass')); // sass watcher
  if (cssFiles.length) watch(cssFiles, () => gulp.start('css')); // css watcher
  if (jsFiles.length) watch(jsFiles, () => gulp.start('js')); // js watcher
  if (htmlFiles.length) watch(htmlFiles, () => gulp.start('html')); // html watcher
  if (imgFiles.length) watch(imgFiles, () => gulp.start('img')); // img watcher
  if (fontsFiles.length) watch(fontsFiles, () => gulp.start('fonts')); // fonts watcher
  if (anotherFiles.length) watch(anotherFiles, () => gulp.start('files')); // files watcher
  if (imgFilesPng.length) watch(imgFilesPng, () => gulp.start('sprite')); // sprite watcher

  browserSync.init({
      notify: false,
      port: 9000,
      server: {
        baseDir: ['./build'],
      }
  });

  gulp.watch(['build/**/*']).on('change', reload);
});
