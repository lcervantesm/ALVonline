import axios from "axios";

export default {
    // Gets all books
    getItems: function() {
        return axios.get("/api/items");
    },
    // Gets the item with the given id
    getItem: function(id) {
        return axios.get("/api/items/" + id);
    },
    // Deletes the book with the given id
    deleteBook: function(id) {
        return axios.delete("/api/items/" + id);
    },
    // Saves an item to the database
    saveBook: function(itemData) {
        return axios.post("/api/items", itemData);
    }
};