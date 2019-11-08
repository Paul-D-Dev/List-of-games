# Angular - Checkpoint 2

## Start

- You have to clone this git repository.
- You have to create a new branch called `VILLE-NOM_PRENOM` which will contain your work.
- Don't forget to commit often.

## Instructions

The purpose of the exercice is:
- display a list of games
- show details of the selected game
- create a new game from a form

The application has a navbar with 3 routes:
- Instructions (/): Display checkpoint instructions
- Jeux (/games) : Display the list of games
- Créer un jeu (/create) : Form for creating a game

**You have to respect the folder architecture.**

Reminder :
- folder `components`: contains presentation components which only have `@Input()` and `@Output()`
- folder `shared`: contains shared datas: services and datas class
- folder `pages`: contains components linked to the `router`

You have to use this array of games: `src/app/games-mock.ts`

### Data class

You are going to manipulate the same data type in all the application. You have to create the class which will contain at least:
- name
- image
- score

### Service

Your application datas will be stored and manipulated directly inside a `GamesService`

### Game list page

The game list page display the component `GamesPageComponent` at the url `/games`

This page contain 2 other components:
- `GamesListComponent`: Only display the game image.
- `GameDetailsComponent`: Display the name, the image and the score of the selected game.

When the user click on a game in the list, its details are displayed. You will add some style for this 2 components. You can display it as you want. Think `flex`.

In this part,  `GamesService` will be injected only in the `GamesPageComponent`. The communication between other components will take place with some `@Input()` and `@Output()` and not in another way.

### Game form creation

The game creation page will display the component `GameCreatePageComponent` at the url `/create`

This page will contain the form for creating a new game with:
- name
- image
- score

When you are submitting the form, you will add the new game in the games array inside the `GamesService` and this new game should be displayed in the game list page.

You will take care to validate the form. All required fields should be filled.

### Bonus*

The exercise should take all your time. However, if you still have some time, you could ask the bonus list to your favorite trainer.

## Advices

Do a diagram to illustrate the relation between your components.
