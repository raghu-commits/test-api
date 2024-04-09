## Description

Todo APIs

## Pre-requesites

1. Postgresql instance.

2. Create .env

```bash
#sample .env file
DB_NAME=todoDB
DB_USERNAME=postgres
DB_PASSWORD=admin
DB_HOST=localhost
DB_PORT=5432
APP_SECRET=secret
```

## Installation

```bash
$ npm install
```

## Running the app

````bash
# development
$ npm run start

# watch mode
$ npm run start:dev

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
````

## Swagger url

```
http://localhost:3000/api/v1/
```
