# MEANg2 Seed Project

[![Build Status](https://travis-ci.org/mycompassspins/mean-ng2-ts-seed.svg?branch=master)](https://travis-ci.org/mycompassspins/mean-ng2-ts-seed)
[![Coverage Status](https://coveralls.io/repos/github/mycompassspins/mean-ng2-ts-seed/badge.svg)](https://coveralls.io/github/mycompassspins/mean-ng2-ts-seed)
[![TypeScript](https://img.shields.io/badge/TypeScript-v2.0-blue.svg)](https://img.shields.io/badge/TypeScript-v2.0-blue.svg)
[![Node Version](https://img.shields.io/badge/node-6.2.2-blue.svg)](https://img.shields.io/badge/node-6.2.2-blue.svg)
[![David](https://img.shields.io/david/strongloop/express.svg?maxAge=2592000)](https://www.npmjs.com/package/express-decorate)

# About

This is a seed project that uses MongoDb, Express 4, Angular 2.0.0 and Node.js 6.2.2. It's obviously not going to be ideal for every project, but it tends to work for most of my own so I thought I'd share it with the world :) The project is also using Twitter Bootstrap SASS and Webpack for builds.

NOTE: This project also makes use of [another library I wrote](https://github.com/mycompassspins/express-decorate), which, in short, allows you to declare routes using decorators on your controller class and methods, like this (this is also a work in progress and contributions are welcome):

```javascript
import { Controller, GET } from 'express-decorate'
import { Request, Response } from 'express'

// mountpath
@Controller('/api/some-route')
export Class SomeController
{
    // endpoing for the mountpath declared in the Controller decorator above
    @GET('/:someParam')
    TestMethod(req:Request, res:Response):Promise<Response>
    {
        return res.json({ success: true, param: req.someParam });
    }
}
```

# Contributing

I welcome contributions provided any pull requests submitted conform to existing style and architecture patterns and are covered adequately with tests.

# Prerequisites:

- Node.js 6.2.2
- npm 3.9.5
- MongoDb - https://docs.mongodb.com/manual/installation/
- Nodemon - `$ npm install -g nodemon`
- Gulp - `$ npm install -g gulp`
- Typescript - `$ npm install -g typescript`
- Jasmine Node - `$ npm install -g jasmine-node@2.0.0`
- Git - https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

## Some useful global Git configurations:

```
$ git config --global alias.co checkout
$ git config --global alias.br branch
$ git config --global alias.ci commit
$ git config --global alias.st status
```

These allow you to run `git co master` instead of `git checkout master` or `git st` instead of `git status` and so on


# Run app in development:

If you already have a local copy of the code and npm packages have been removed, it's a good idea to run

```
$ rm -rf node_modules && npm cache clean
```

Install modules

```
$ npm install
```

Install Bower dependencies

```
$ bower install
```

Install typings

```
$ typings install
```

You can use the project's development config file (`/src/config/environment/development.ts`), which uses a local MongoDb (MeanSeed-dev), or you can use a local configuration by adding `/src/config/environment/local.ts` and the property `use: true`

```
$ gulp serve
```


# Testing:

### Server:

Run all tests:

```
$ npm test
```

Run a specific spec file:

(note: do not use file extension) `npm test Application` or `npm test helpers/FileSystemHelper`

### Client:

Simply navigate to http://localhost:3000/client-tests to run all specs

To run a specific spec: http://localhost:3000/client-tests?spec=SpecName (no extension needed)
