const express = require("express");
const verifyJWT = require("../../middleware/verifyJWT")


const {getRequestedOrganizations}=require("../../controllers/admin/requestedOrganization")

const router = express.Router();

router.get("/reqorglist", getRequestedOrganizations);

module.exports = router;
