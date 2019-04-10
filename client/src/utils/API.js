import axios from "axios";
//const URL = "https://www.googleapis.com/books/v1/volumes?q=";
//const API = "&key=AIzaSyBK5Z1kK3J-n3JqBG8SZOlfhPqzUeU--mA";

// search: function (query) {
//     return axios.get(URL + query + API);
// },

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
}
