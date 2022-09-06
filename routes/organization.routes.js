const express = require("express");
const verifyJWT = require("../middleware/verifyJWT")

const { validate } = require("../middleware/donationValidation");

const { createOrganization } = require("../controllers/organization/createOrganization");
const { getAllOrganizations } = require("../controllers/organization/allOrganizations");

const router = express.Router();

router.post("/register", createOrganization);
router.get("/view", getAllOrganizations)

module.exports = router;
