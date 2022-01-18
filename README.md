# [PROTEIN SEQUENCE](http://localhost:3000/)

## Setup App

**1. Prequisites**

1. Git is installed
2. Node version >12
3. NPM version >6
4. Internet connectivity

**2. Clone the repo**

```shell
$ git clone https://github.com/Sabohi/protein-sequence
```

**3. Install the packages**

```shell
$ cd protein-sequence
$ yarn install
```

**4. Setup .env file**

**5. You're ready to rock**

## Start App

```shell
$ yarn start
```

## Building & Deploying the App

```shell
# production build
$ yarn build:prod

# development build
$ yarn build

#DEV Server
$ yarn deploy

#PROD Server
$ yarn deploy:prod
```

## Testing APP

```shell
$ yarn test
```

## Formatting Code

```shell
$ yarn format
```

## Generating Documents of App

**Prequisites:**

1. parcel-bundler is installed globally
2. jsdoc is added as dev-dependencies
3. better-docs is added as dev-dependecies

**To Install packages run following command**

```shell
$ yarn global add parcel-bundler
$ yarn add jsdoc better-docs
```

**To generate docs**

```shell
$ yarn docs
```

**Note:** A docs directory will be created in **root** of the app on successfull generation of documents. To view the documents open the _index.html_ file.
# protein-sequence
