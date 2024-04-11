# Purple Dot Coding Exercise

We provide this template to save you time on setting up some basics. You are welcome to change anything you like in this exercise template.

For your convenience this template is set up with Next.js & a PostgreSQL database. You don't have to use these, you can use any tools you like but the stack should be React or Vue backed by a relational database such.

## Getting Started

Please do this ahead of time for your interview.

### Setting Up

You can choose to either use GitHub Codespaces or your local machine as your development environment. 

1. Install [Docker](https://www.docker.com/get-started/)
2. Install Node.js. If you're using OS X or Linux we recommend using [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
3. Install node: `nvm install 16.13.1` `nvm use 16.13.1`
4. Install the right version of npm: `npm install -g npm@8.1.2`
5. Install all dependencies: `npm install`

### Running

- `npm run dev:db` to start the Postgres docker container
  - You can log in to the container using `psql -h 127.0.0.1 --user postgres`, password is set to `secret`
  - `npm run db:migrate` to migrate the database to the latest revision
  - `npm run db:rollback` to rollback the latest DB migration
- `npm run dev` to start up the dev server

### Testing

#### Linting

- `npm run lint:fix` to account for all linting steps

#### Jest tests

- `npm run test` to run all Jest-based tests
- `npx jest --watch --runInBand some/file/path.test.js` to run a specific Jest test file

#### Cypress tests

These use the Chrome browser.
If you choose to add these, name them *.spec.js in tests/cypress and then you can
- `npm run dev` to run up the server
- `npm run cy:open` to open Cypress and use the UI to run specific files
- `npm run cy:run` to have Cypress run all the available tests
