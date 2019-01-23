const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const computerSchema = new Schema({
    item: { type: String, required: true },
    qty: { type: Number, required: true },
    tags: [String],
    price: { type: Number, required: true },
    updated: { type: Date, default: Date.now },
    features: {}
});

const computer = mongoose.model("Book", computerSchema);

module.exports = computer;