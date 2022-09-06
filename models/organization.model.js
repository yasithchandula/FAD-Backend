const mongoose = require("mongoose")
const Schema = mongoose.Schema

const OrganizationSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    zipCode: {
        type: Number,
        required: true
    },
    contactNumber: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    registrationNumber: {
        type: String,
        required: true
    },
    registrationDate: {
        type: Date,
        required: true
    },
    presidentName: {
        type: String,
        required: true
    },
    presidentContactNumber: {
        type: Number,
        required: true
    },
    presidentEmail: {
        type: String,
        required: true
    },
    secretaryName: {
        type: String,
        required: true
    },
    secretaryContactNumber: {
        type: Number,
        required: true
    },
    secretaryEmail: {
        type: String,
        required: true
    },
    registrationCertificate: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: "pending"
    },
    roles: {
        type: String,
        required: true,
        default: "5150"
    }
})

const Organization = mongoose.model("User", OrganizationSchema)
module.exports = Organization;