const express = require("express");

const {
    createFund,
} = require("../../controllers/fund/createFund");

const router = express.Router();

router.post("/create", createFund);

module.exports = router;