# Currently both Heroku links are not accessible due to change of Heroku's pricing plan from 28 November 2022. The README file as well as the environments will be updated once suitable alternatives are setup. If reference to the project is needed, please contact me directly.

## Live preview: https://gallery-app-d.herokuapp.com/home

### REST API Swagger link: https://gallery-api-app.herokuapp.com/api

# GalleryApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.2.

## Development server

Run `npm i` and `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Endpoints

```
- user/login
- user/register (the registered user will not have admin rights in the app. This is generally created for long-term use. Currently it's purpouse is to create admins, which need to be enabled as such from the backend).
- gallery/paintings
- gallery/painting/some_id
- gallery/add
- gallery/edit/some_id
- about/contact-me
- about/my-story
```

# All CRUD operations are available in the app
