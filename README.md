# Sanfordweb
Small website development

To run from cloud 9 (will only run frontend code) using angular cli use: 
`ng serve --open --host $IP --port $PORT --disable-host-check`

To run full application in the root of the project run:
```
ng build
node index.js
```

### To fix angular IE integration (if not already done)
Uncomment lines in pollyfill.ts and run the following commands
```
npm uninstall classlist.js --save
npm cache verify
npm install classlist.js --save-exact
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

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
