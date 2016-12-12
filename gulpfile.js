/******* WHERE THE MAGIC HAPPENS
* Dans ce gulpfile on va requiere tout les outils qu'on utilise.
* On appelle ces outils des "modules".
* gulp, installé globalement et localement, va nous permettre de créer des "tâches".
* On récupère nos fichiers dans le dossier src et on les exporte vers le build.
* On en profite aussi pour faire nos premiers pas avec es6 et préprocesseur sass.
*******************************/
const gulp    = require ('gulp');
const uglify  = require ('gulp-uglify'); // minifie notre js
const concat  = require ('gulp-concat'); // concatène plusieurs fichiers du même type. index.js et other.js devient custom.js
const babel   = require ('gulp-babel'); // tradut es6 en javascript compréhensible par le navigateur
const sass   = require ('gulp-sass'); // traduit le .scss en css

const plumber = require ('gulp-plumber'); // Evite de casser notre tâche lorsqu'il y a une erreur et nous laisse un message.
const reload  = require ('gulp-livereload'); // Rafraichit automatiquement notre navigateur.

// On a un fichier vendors.js qui contient un tableau de toutes les librairies externes qu'on utilise
// Ici on a babel polyfill (qui nous permet d'utiliser des generators), et jquery.
const vendors = require ('./vendors.js');

//***************************** ASSETS *******************************//
// Notre tâche assets gère les fichiers qu'on ne va pas modifier mais qu'on veut juste migrer vers build
// C'est à dire tout le dossier assets (img et data.json) et notre index.html
gulp.task ('assets', function ()  {

  gulp.src ('src/*.html') // Je spécifie comme source tout les fichiers .html enfants de src
      .pipe (gulp.dest('build')); // Je les migre vers build

  gulp.src ('src/assets/**/*') // Je spécifie comme source tout les fichiers/dossiers enfants de src
      .pipe (gulp.dest('build/assets')); // Je les migre vers build/assets
});

//***************************** CSS *******************************//
// La tâche css va récupérer tout les .scss de src, les traduire en .css et les migrer vers build
gulp.task ('css', function ()  {

  gulp.src ('src/*.scss') // Je spécifie comme source tout les fichiers .scss enfants de src
      .pipe (sass()) // Je les traduit en .css
      .pipe (concat('custom.css')) // Je les assemble dans un fichier unique custome.css
      .pipe (gulp.dest('build')); // J'envoie ce fichier dans build

});

//***************************** JS *******************************//
// La tâche js va nous permettre de traduire es6, minifier le js et créer un fichier unique
gulp.task ('js', function () {

  gulp.src ('src/*.js') // Je récupère tout les .js
      .pipe (plumber()) // Je gère les erreurs
      .pipe(babel({ 
        presets: ['es2015']
      })) // Je traduit es6 en javascript compatible avec les navigateurs
      .pipe (uglify()) // Je minifie
      .pipe (concat('custom.js')) // J'assemble dans un fichier unique custom.js
      .pipe (gulp.dest('build')); // Je migre ce fichier vers build

});

//***************************** VENDORS *******************************//
// J'utilise le tableau qui liste l'emplacement dans node_modules
// de toutes les librairies/framework que j'utilise. C'est celui dans le fichier 'gulp-basis/vendors.js'
gulp.task ('vendors', function () {

  gulp.src (vendors.js) // Je donne les sources de toutes mes lib/framework
      .pipe (uglify()) // Je les minifie
      .pipe (concat('vendors.js')) // Je les assemble dans un fichier unique 'vendors.js'
      .pipe (gulp.dest('build')); // Je migre ce fichier dans le build -> 'gulp-basis/build/vendors.js'

});

//***************************** GLOBAL TASKS *******************************//
// Cette tâche me permet de faire le build de tout mon dossier src
gulp.task ('build', ['assets', 'css', 'js']);

// Cette tâche me permet de faire le build de tout mon dossier src ET mes vendors (librairies/framework externes)
gulp.task ('build-all', ['build', 'vendors']);

// Cette tâche me permet de mettre un espion dans mon dossier.
// Dès que je change mon dossier src, mon projet est rebuildé et relancé dans le navigateur
gulp.task ('watch', ['build'], function () {
  reload.listen();
  gulp.watch('build/**/*').on('change', reload.changed);
  return gulp.watch('src/**/*', ['build']);
});