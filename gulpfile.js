const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const livereload = require('gulp-livereload');


// Aqui deve constar o PATH do projeto para a pasta que contem todo o SASS
const sassPath = './assets/scss/**/*.scss';

// Aqui deve constar o PATH onde será salvo o arquivo CSS resultante do SASS compilado
const cssPath = './assets/css';

// Compiling SASS into CSS
function style() {

    return gulp.src(sassPath)

    .pipe(sass({
        outputStyle:'compressed'
    })
    .on('error', sass.logError))
    .pipe(concat('styles.css'))
    .pipe(gulp.dest(cssPath))
    .pipe(livereload());
};

function watch() {
    livereload.listen();

    var watcher = gulp.watch([sassPath], style);
    watcher.on('change', function (path) { console.log('O arquivo ' + path + ' foi modificado.'); });
};

exports.style = style;
exports.watch = watch;