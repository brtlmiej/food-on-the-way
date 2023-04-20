## Description

API that can be used to find restaurants in your location made with [Nest](https://github.com/nestjs/nest) framework.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run project with docker

```bash
# dev env
$ docker-compose -f docker-compose.dev.yml up

# prod env
$ docker-compose -f docker-compose.dev.yml up
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## DB migrations
All DB migrations are stored in /migrations directory
```bash
# create new migration with given name
$ npm run migration:create --name=MigrationName

# generate new migration with given name base on entities changes
$ npm run migration:generate --name=MigrationName

# run migrations that haven't been executed before
$ npm run migration:run

# revert last executed migration
$ npm run migration:revert

# synchronizes your entities with database schema
$ npm run schema:sync
```