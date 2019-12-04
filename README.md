# MusicLink

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



# Potential Workflow

1. User logs in to main account, generate a random URL on end
    1. Allow a button to copy/paste URL
2. Run GETS to retrieve currently playing song (maybe every 15 seconds?)
    * potentially calculate when the next GET call should be
3. On another instance, log in
    1. Paste URL and retrieve the songs that are playing
        * If songs are not equal, play song at current time stamp of the GET
        * If songs are equal, do nothing 