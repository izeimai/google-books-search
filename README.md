# Google Books Search app

## What does this app do?
App has two pages (Search and Saved) with the default landing page being the Search page. The user can enter a book title to search on the Search page and it will query the Google Books API to find matches and display in the same page. Each book displayed shows the title, author, description of the book, link to the Google Books website and a image of the book cover. The user can then decide whether to save the book to view in the Saved page by clicking on the "Save Book" button. When viewing these saved books on the Saved page, the user can also decide to remove the item from the Saved book list as well using the Delete Book button.


## Technologies used
* MongoDB and Mongoose (web server)
* Express.js
* React (create-react-app)
* Node.js
* Google Books API
https://developers.google.com/books/docs/v1/getting_started#REST


## Challenges in the activity
It took a while to understand the two different ports 3000 and 3001, and how the front-end with React is using 3001 but any changes to the server side would require restarting the server. I can see the benefits of this type of app especially with group work because one group could be editing the client folder, while the other could work on the server side. 
A related challenge was to get the APIs straight in my mind; external to the Google Books API and calls to the MongoDB database. Again, it helped that the front-end is distinctly in a client folder to help distinguish the two.

## Future directions
I will do over this activity without using Activity 7 as the starting point as indicated in the asssignment directions. I'm also not sure how the toggle action works for the save and delete buttons. 

---

## About This Boilerplate

This setup allows for a Node/Express/React app which can be easily deployed to Heroku.

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following command:

```
npm install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
npm start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

To deploy, simply add and commit your changes, and push to Heroku. As is, the NPM scripts should take care of the rest.
