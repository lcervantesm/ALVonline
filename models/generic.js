const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const genericSchema = new Schema({
    item: { type: String, required: true },
    qty: { type: Number, required: true },
    tags: [String],
    price: { type: Number, required: true },
    updated: { type: Date, default: Date.now },
    features: {}
});

const generic = mongoose.model("Generic Item", genericSchema);

module.exports = generic;