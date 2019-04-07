import axios from "axios";
const URL = "https://www.googleapis.com/books/v1/volumes?q=";
const API = "&key=AIzaSyBK5Z1kK3J-n3JqBG8SZOlfhPqzUeU--mA";

export default {
    search: function(query) {
        return axios.get(URL + query + API);
    },
    saveBook: function(bookObject) {
        return axios.post('/saved', bookObject);
    },
    getSavedBook: function() {
        return axios.get('/getSavedBook');
    },
    deleteSavedBook: function(id) {
        return axios.delete('/deleteSavedBook', {data: {bookId: id}})
    }
}
