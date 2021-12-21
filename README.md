## Purple Dot Exercise

We provide this template to save you time on setting up some basics. You are welcome to change anything you like in this exercise template.

For your convinence this template is set up with Next.js/React/PostgreSQL database. You don't have to use these, you can use any tools you like but the stack should be React or Vue backed by a SQL/relational database. 

The exercise brief will be provided at the start of your code exercise interview.

### Setting Up

Complete these steps before your interview.

On macOS:

1. Install [Docker](https://docs.docker.com/desktop/mac/install/)
2. Install [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) (node version manager)
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
