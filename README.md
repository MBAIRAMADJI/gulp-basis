# gulp-basis

Ce projet a pour but de vous accompagner dans vos premiers pas avec **gulp**.

Expérimentez avec et n'ayez pas peur de l'utiliser en **base de tout vos projets**.

![This is gulp](https://raw.githubusercontent.com/simplonco/gulp-basis/master/src/assets/img/gulp.jpg)

Récupérer le projet
-------------

Vous allez d'abord _forker_ ce repo git.
Les forks vous permettent de créer une copie de ce repo sur votre propre compte.

Ensuite, clonez la version que vous avez sur votre compte en utilisant ssh.

```$ git clone git@github.com:VOTRE_COMPTE/gulp-basis.git ```

Attention : si cette commande ne fonctionne pas, vérifier de bien avoir votre clé ssh liée à votre compte github.

Installer les modules
-------------

Grace à npm et son système de package, vous n'avez pas besoin d'installer tout les outils un à un. Le fichier _package.json_ contenu dans le projet va être automatiquement lu et va vous installer tout les outils dont vous avez besoin.

```$ npm install```

Et voilà, un dossier _node\_modules_ vient de se créer à la racine de votre projet.

Utiliser les tasks de gulp
-------------

Tout d'abord vérifier de bien avoir installé gulp en global :

```$ sudo npm install gulp -g```

Il est temps de _run_ votre première _task_ !

La tâche _build-all_ doit être exécutée en premier afin de build à la fois la src et vos librairies/framework ( regardez les commentaires du fichier gulpfile.js pour plus d'informations).

```$ gulp build-all```

![gulp workflow](https://raw.githubusercontent.com/simplonco/gulp-basis/master/src/assets/img/workflow.png)

Livereload
-------------

Vérifiez ensuite de bien avoir l'extension livereload pour votre navigateur et que cette extension fonctionne correctement.

En lançant la tâche _watch_ vous espionnez votre projet. Au moindre changement, gulp re-build votre projet et rafraichit la page de votre navigateur.

```$ gulp watch```


Serveur local
-------------

Enfin, nous allons aussi initialiser un serveur local sur 127.0.0.1:7000.
Ça nous permet de  gérer entre autre les permissions de requête local sur Chrome.

Dans le fichier _package.json_ il y a une propriété :
```
scripts : {
    "cdn" : "*****************"
}
```

Et bien ce script nous permet de lancer le serveur en exécutant "npm run _nom\_du_script_"

```$ npm run cdn```

Conclusion
-------------

Et voilà, pour utiliser d'autres outils il suffit de _run_ :

```$ npm install mon-outil --save```

Et de regarder sur le site de [npm](https://www.npmjs.com/) comment l'utiliser.

