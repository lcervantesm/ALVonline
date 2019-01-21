const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cellphoneSchema = new Schema({
    item: { type: String, required: true },
    qty: { type: Number, required: true },
    tags: [String],
    updated: { type: Date, default: Date.now },
    features: {}
});

const computer = mongoose.model("Book", cellphoneSchema);

module.exports = computer;