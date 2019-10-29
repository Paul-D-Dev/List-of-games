# Angular - Checkpoint 2

## Pour commencer

- Tu dois cloner ce dépôt.
- Tu dois créer une branche appelée `VILLE-NOM_PRENOM` qui va contenir ton avancée.
- N'oublies pas de commiter régulièrement.

## Instructions

Le but de l'exercice est :
- d'afficher une liste de jeux
- de visualiser les détails d'un jeu sélectionné
- de créer un jeu avec un formulaire

L'application possède une barre de navigation avec 3 routes :
- Instructions (/): Affiche les instructions du checkpoint
- Jeux (/games) : Affichage de la liste des jeux
- Créer un jeu (/create) : Formulaire de création d'un jeu

**Tu devras respecter l'architecture des dossiers.**

Pour rappel :
- dossier `components` : contient les composants qui ne possèdent que des `@Input()` et `@Output()`
- dossier `shared` : contient les données partagées à savoir, les services et les classes de données
- dossier `pages` : contient les composants liés au `router`

La tableau des films que tu dois utiliser se trouve ici : `src/app/games-mock.ts`

### Classe des données

Tu vas manipuler le même type de données dans toute ton application. Tu dois créer sa classe qui contiendra à minima :
- nom
- affiche
- note

### Service

Les données de ton application seront stockées et manipulées directement à partir d'un `GamesService`

### Page de listing des jeux

La page de la liste des games affiche le composant `GamesPageComponent` à l'adresse `/games`

Cette page contiendra 2 autres composants :
- `GamesListComponent` : Affiche seulement l'affiche des jeux.
- `GameDetailsComponent` : Affiche le nom, l'affiche et la note du jeu sélectionné dans la liste

Lorsque l'utilisateur cliquera sur un jeu de la liste, les détails du jeu s'affichent. Tu styliseras l'affichage de ces 2 composants comme tu le souhaites (côte à côte, l'un en dessous de l'autre...). Pense `flex`.

Dans cette partie, le `GamesService` sera injecté uniquement dans le `GamesPageComponent`. La communication avec les autres composants se fera avec des `@Input()` et `@Output()` et pas autrement.

### Formulaire de création d'un jeu

La page de création d'un jeu affiche le composant `GameCreatePageComponent` à l'adresse `/create`

Cette page contiendra un formulaire de création d'un jeu avec :
- nom
- affiche
- note

Lors de la soumission du formulaire, tu devras ajouter le jeu dans la liste des jeux du `GamesService` et il devra apparaître dans la page de listing des jeux.

Tu veilleras à bien valider le formulaire. Les champs obligatoires devront être remplis.

### Bonus*

L'exercice devrait te prendre tout ton temps. Néanmoins, si tu as encore du temps, tu peux demander à ton formateur préféré la liste des bonus.

## Conseils

Fait un schema papier d'illustration pour te représenter les composants et leur communication.
