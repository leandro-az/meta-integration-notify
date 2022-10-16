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

## Test Querys and Mutations: 

Run the project and go to: http://localhost:3000/graphql to access grahql plyaground.



<p align="center">
  <img src="/src/templates/graphql_playground.png" width="800" title="Login Scream">
</p>


## Test Lead Notification:

Do Http Post requisition to integration url like:

```
POST on https://d1jjp4ddzxq0gc.cloudfront.net/leads/recive/{IntegrationID}
``` 
With body:

```
{
    "email": "lead@puc.com",
    "phone": "99999999",
    "name": "Lead Puc",
    "age": 24,
    "valor_total_plano": 20000,
    "obs": "Novo Lead No Portal"
}
```

You will recive in our email the lead information like:


<p align="center">
  <img src="/src/templates/notification.png" width="500" title="Login Scream">
</p>

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

