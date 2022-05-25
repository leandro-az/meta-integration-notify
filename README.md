## Description

Repository Dedicated To TCC IN Architecture in Distributed Software - PUC

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

## 🤝 Code Contributor

👤 **Leandro Almeida**

## License

Nest is [MIT licensed](LICENSE).
