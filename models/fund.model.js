const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fundSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    target: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    endingDate: {
        type: Date,
        required: true,
    },
    budget: {
        type: Number,
        required: true,
    },
    fundImage: {
        type: String,
        required: true,
    },
    contactEmail: {
        type: String,
        required: true,
    },
    contactNumber: {
        type: Number,
        required: true,
    },
    organizationID: {
        type: String,
        required: true,
    },
})

const Fund = mongoose.model("Fund", fundSchema);
module.exports = Fund;