# reStart-angular

This is a responsive (mobile first) boilerplate single page app in Angular (v2+). It includes basic features to get a scalable single page application started.

## Style

* single responsibility
* Angular is modular and encapsulated by default
* uses [Codelyzer](https://github.com/mgechev/codelyzer) + [TSLint](https://palantir.github.io/tslint/) rules provided by [@angular/cli](https://cli.angular.io/) to adhere to the Style Guide
* for more on style, see the [Angular Style Guide](https://angular.io/guide/styleguide)

## Features

* responsive features with matchmedia and subscription (see [angular-mediacheck](https://github.com/kmaida/angular-mediacheck) for documentation)
* SCSS (global and components)
* simple loading state
* sample API HTTP call using observable
* off-canvas navigation
* filter service
* example services and components
* [Bootstrap 4-alpha](https://v4-alpha.getbootstrap.com/)

## Dependencies

* [Node.js >= v6](https://nodejs.org/)
* [Angular CLI](https://github.com/angular/angular-cli)

**Note:** I will try to keep this project up to date with the latest Angular CLI releases. However, if you find that the project's CLI version does not match your global version, you can [update the CLI by following the instructions here](https://github.com/angular/angular-cli#updating-angular-cli).

## Setup and Installation

1. Make sure dependencies are installed and clone the project.
2. Run `$ npm install` from root.

## Run

Run `$ ng serve` to serve the project.

## Lint

Run `$ ng lint --type-check` to lint the project.

## Changelog

* 6/17/17: Several updates and changes: use off-canvas nav always, improved modularity of styles, update to @angular/cli v1.1.2
* 4/28/17: Update to @angular/cli v1.0.1
* 3/27/17: Update to @angular/cli v1.0.0
* 3/24/17: Update to Angular v4.0.0.
* 2/20/17: Update to angular-cli v1.0.0-beta32.3.
* 2/9/17: Update to Angular v2.4.7 and angular-cli v1.0.0-beta30.
* 1/31/17: Update to Angular v2.4.5 and angular-cli v1.0.0-beta26.
* 11/29/16: Update README with Node.js dependency version.
* 11/28/16: Move `app.module.ts` file into root of src/app folder to fix CLI `generate` command
* 11/25/16: Initial release
