# Book Search Engine

[![GitHub license](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This application is a Google Books API search using GraphQL API built with Apollo Server which helps readers to search for new books and keep a list of books to purchase. The users can create a login, search books, save and delete books from the list. In addition to that they can navigate to the Google Books site by clicking on the book cover or title. The app is built using the MERN stack, with a React front end, MongoDB database, and Node.js/Express.js server. An Apollo Server has set up to use GraphQL queries and mutations to fetch and modify data. An Apollo provider is created to enable the communication of the requests with the Apollo Server. JSON Web Tokens are used to add authentication.

## Installation

- Install Node.js v16
- Clone the Repository from GitHub and navigate to the root directory
- Install necessary dependencies running the following command :

  ```
  npm i
  ```

## Usage

The user is presented with a menu with the options to Search for Books and Login/Signup and an input field to search for books and a submit button when the application is opened. When the user click on the Search for Books menu option then an input field to search for books and a submit button will be displayed. When the user search for a book then the details of all the books related to the searched title will be displayed. The details include title, authors, book cover and description. The user can go to the Google Books site by clicking on the book cover or title and read the book there. The users can create an account or login by clicking on the Login/Signup link and providing the details like username, email and password. When signed in or logged in , they will be able to save books by clicking on the save button which will appear with each book section. In addition to save they can see the books that they saved by clicking on the 'See Your Books' link in the navigation section. The users can edit the list by deleting the books which are no longer needed in the list.

#### Deployed application can be found here :

https://what-to-read-next-c8be256ac85a.herokuapp.com/

The application can be run by using the following command in the terminal:

```
npm run develop
```

The following images show the web application's appearance and functionality :

**Sign Up And Search**

![signup-searh](/client/src/assets/images/signup-searh.gif)

**Log In And Save Book**

![login-save](/client/src/assets/images/login-save.gif)

**Delete Book**

![delete](/client/src/assets/images/delete.gif)

**Navigating to Google Books**

![P 3](/client/src/assets/images/click-link.gif)

## Technologies

- **MongoDB**

- **Express**

- **React**

- **Node**

- **GraphQL**

## Credits

#### References

https://www.apollographql.com/blog/graphql/basics/input-types-and-client-caching/

## License

[MIT](https://opensource.org/licenses/MIT) license.
