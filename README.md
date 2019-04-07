# Google Books Search app

## What does this app do?
App has two pages ()

## Technologies used
* React (create-react-app)
* Mongoose (web server)
* Google Books API
https://developers.google.com/books/docs/v1/getting_started#REST


## Challenges in the activity
It took a while to understand the two different ports 3000 and 3001, and how the front-end with React is using 3001 (so the changes appear in real-time) but any changes to the server side would require restarting the server. I can see the benefits of this type of app especially with group work because one group could be editing the client folder, while the other could work on the server side. 
A related challenge was to get the APIs straight in my mind; external to the Google Books API and calls to the MongoDB database. Again, it helped that the front-end is distinctly in a client folder to help distinguish the two.

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
