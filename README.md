# E-CommerceBackEnd

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

## Description

An E-Commerce site in which the back-end uses express.js API and Sequelize, to interact with a MySQL database.

This project utilizes API routes that make calls to create, view, update, and delete categories, products, and tags.

## User Story
 
```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

```

## Acceptance Criteria 

```
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database


```

## Table of Contents
1. [Video](##Video)
2. [Technologies](##Technologies)
3. [Installation/Usage](##Installation/Usage)
4. [License](##License)
5. [Contributing](##Contributing)
6. [Questions](##Questions)


## Video

Click [here](https://drive.google.com/file/d/1LCfp1p7lMI2K5K9INeS_kTfSiFzix-_E/view) to see the video walkthrough! 

This video walkthrough utilizes Insomnia to demonstrate usage of the API routes.


## Technologies

* Node.js
* express js
* npm sequelize
* MySQL

## Installation/Usage

If you run this application locally you will need to clone it from this repo then run the following commands/install dependencies

```
npm install
npm install express
npm install mysql2
npm install dotenv
npm install sequelize
```

You will need to put your MySQL log in info in a .env file to run this.

After set up is initialized, you will need to source the MySQL database schema.sql in the db folder:
```
source db/schema.sql
```
Then seed the databse: 
```
npm run seed 
```

Then run the following command to begin:

```
npm start
```

## License

This repository is under the MIT License.

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

## Contributing

1. Fork the repo from Github
2. Clone the repo locally
3. Commit your changes
4. Push to your branch
5. Open a Pull request for review

## Questions?

Contact me at hannahcodes@protonmail.com 📫

