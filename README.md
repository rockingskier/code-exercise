# Purple Dot Code Exercise

We provide this template to save you time on setting up some basics. You are welcome to change anything you like in this exercise template.

For your convenience this template is set up with Next.js & a SQLite database. You don't have to use these, you can use any tools you like but the stack should be React or Vue backed by a relational database.

## Getting Started

Please do this ahead of time for your interview.

### Setting Up

There are 3 options you can choose from:

1. Use [GitHub Codespaces](https://github.com/features/codespaces).
1. Use a local [Devcontainer]((https://code.visualstudio.com/docs/devcontainers/containers)).
1. Run everything locally.

#### Codespaces

1. Click the green `<> Code` button at the top of the page.
1. Create a new Codespace in this repository.
1. Run `npm install` in the terminal.
1. Run `npm run dev` to start the Next.js dev server.

#### Local Devcontainer

1. Check this respository out locally.
1. Open the folder in VSCode.
1. When prompted, choose to open the Devcontainer. It will automatically build and open it.
1. Run `npm install` in the terminal.
1. Run `npm run dev` to start the Next.js dev server.

#### Local Setup

1. Install [Docker](https://www.docker.com/get-started/)
1. Install Node.js 20. If you're using OS X or Linux we recommend using [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
1. Run `npm install` in the terminal.
1. Run `npm run dev` to start the Next.js dev server.

### Commands

- `npm run dev` to start the Next.js development server
- `npm run lint` to account for all linting steps
- `npm run test` to run all any unit tests.
- `npx prisma migrate deploy` to run migrations against the database.
- `npx prisma migrate dev` to create new migrations.
- `npx prisma generate` to regenerate the Prisma bindings.
