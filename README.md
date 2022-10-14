# Meta Integration Notify - Back

This back-end project that was generated to The Final Project of postgraduate on Distributed Software Architecture in PUC 

## Technologies used.

[Typescript](https://www.typescriptlang.org/)

[NEST.js](https://nestjs.com/)

[Graphql](https://graphql.org/)

[AWS - Cloudfront](https://aws.amazon.com/pt/cloudfront/)

[Elastic Beanstalk](https://aws.amazon.com/pt/elasticbeanstalk/)

[Github Actions](https://github.com/features/actions)


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

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## 🚀 CREATE SECURITY GROUP

####

```
aws cloudformation create-stack --template-body file://./aws/security-group/rds-security-group.yml --stack-name min-dev-rds-security-group --profile dev
```

## 🚀 CREATE RDS

####

```
aws cloudformation create-stack --template-body file://./aws/rds/rds-cloudformation.yml --stack-name min-dev-rds --profile dev
```

## SCAFFOLDING DB:

```
typeorm-model-generator -h <host> -d <database> -p [port] -u <user> -x [password] -e [engine]
```

## 🤝 Code Contributor

👤 **Leandro Almeida**

