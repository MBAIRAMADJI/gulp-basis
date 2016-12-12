/* Fichier .js
* 
*Je peux utiliser la syntaxe es6
*
*/
'use strict';

// Cette function s'auto-éxécute.
// L'argument js est passé à la fin de ma fonction
(function (js) {

  // On log 'This is es6'
  console.log('This is ' + js);

  // On peut utiliser jquery pour récupérer un fichier externe. Par exemple un objet .json.
  // $.get('le_nom_du_fichier').then(la_fonction_callback_executee_quand_on_a_recupere_le_fichier);
  $.get('assets/data.json').then(function (data) { // data a la valeur du contenu du fichier.
    console.log(data);
  });

})('es6'); // 'es6' est l'argument qu'on passe à la fonction.